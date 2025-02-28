// import User from "../models/User.js";
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// //user registration
// export const register = async (req, res) => {

//     try {
//         //hashing password
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(req.body.password, salt);

//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hash,
//             photo: req.body.photo,
//         })
//         await newUser.save();
//         res.status(200).json({
//             success: true,
//             message: 'Successfully created',
//         });
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: 'Failed to Create, try again!'
//         });
//     }
// };

// //user login
// export const login = async (req, res) => {
//     const email = req.body.email;
//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not Found!"
//             });
//         }

//         const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

//         if (!checkCorrectPassword) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Incorrect email or password"
//             });
//         }

//         const { password, role, ...rest } = user._doc;

//         const token = jwt.sign(
//             { id: user._id, role: user.role },
//             process.env.JWT_SECRET_KEY,
//             { expiresIn: "15d" }
//         );

//         // set token in browser cookies and send request to the client
//         res.cookie("accessToken", token, {
//             httpOnly: true,
//             expires: token.expiresIn,
//         })
//             .status(200).json({
//                 token,
//                 data: { ...rest },
//                 role,
//             })

//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to Login"
//         });
//     }
// };


import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // Create new user
        const newUser = new User({
            userName: username, // Ensure correct field name
            email: email,
            password: hash,
            photo: photo || "", // Default empty if no photo provided
        });

        await newUser.save();
        res.status(201).json({ success: true, message: "Successfully created" });
    } catch (err) {
        console.error("Error in register function:", err); // Log error
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

        // Set token in cookies
        res.cookie("accessToken", token, {
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        })
            .status(200)
            .json({
                token,
                data: { ...rest },
                role,
            });

    } catch (err) {
        console.error("Error in login function:", err);
        res.status(500).json({ success: false, message: "Failed to Login" });
    }
};
