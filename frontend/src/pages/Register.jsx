import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button, Spinner } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

import registerImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // ✅ Loading state for API call
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value.trim(), // ✅ Trim to avoid accidental spaces
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    setLoading(true); // Start loading
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      console.log("API Response:", result); // ✅ Debugging

      if (!res.ok) {
        throw new Error(result.message || "Registration failed, try again!");
      }

      dispatch({ type: "REGISTER_SUCCESS" });
      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);
      alert(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="Register" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="User Icon" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username"
                      value={credentials.username}
                      onChange={handleChange}
                      autoComplete="off" // ✅ Prevents autofill issues
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={credentials.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      value={credentials.password}
                      onChange={handleChange}
                      autoComplete="new-password"
                      required
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                    disabled={loading} // ✅ Disable while loading
                  >
                    {loading ? <Spinner size="sm" /> : "Create Account"}
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
