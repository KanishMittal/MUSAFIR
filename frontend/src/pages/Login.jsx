import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        dispatch({ type: "LOGIN_START" });

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(credentials),
            });

            const result = await res.json();
            if (!res.ok) {
                setError(result.message || "Login failed. Please try again.");
                return;
            }

            dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
            navigate("/");
        } catch (err) {
            setError("Something went wrong. Please try again.");
            dispatch({ type: "LOGIN_FAILURE", payload: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt="Login Illustration" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="User Icon" />
                                </div>
                                <h2>Login</h2>
                                {error && <p className="error-message">{error}</p>}
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email"
                                            onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password"
                                            onChange={handleChange} />
                                    </FormGroup>
                                    <Button className="btn secondary__btn auth__btn"
                                        type="submit" disabled={loading}>
                                        {loading ? "Logging in..." : "Login"}
                                    </Button>
                                </Form>
                                <p>
                                    Don't have an account? <Link to="/register">Create</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
