import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User Registration
export const register = async (req, res) => {
    try {
        console.log("Incoming Request:", req.body); // Debug incoming data

        // Validate input
        const { username, email, password, photo } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists!" });
        }

        // Hash password asynchronously
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            username,  // ✅ Match frontend naming convention
            email,
            password: hash,
            photo: photo || "", // Default empty if no photo provided
        });

        await newUser.save();
        res.status(201).json({ success: true, message: "Successfully created" });
    } catch (err) {
        console.error("Error in register function:", err.message, err.stack);
        res.status(500).json({ success: false, message: "Failed to Create, try again!" });
    }
};

// User Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and Password are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not Found!" });
        }

        const checkCorrectPassword = await bcrypt.compare(password, user.password);
        if (!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        const { password: hashedPassword, role, ...rest } = user._doc;

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15d" }
        );

        // Set token in cookies securely
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        });

        res.status(200).json({
            token,
            data: { ...rest },
            role,
        });

    } catch (err) {
        console.error("Error in login function:", err.message, err.stack);
        res.status(500).json({ success: false, message: "Failed to Login" });
    }
};
