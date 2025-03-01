import React, { useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubscribe = () => {
        if (!email || !email.includes("@")) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            alert("Thank you for subscribing! You will receive updates soon.");
            setEmail("");
        }
    };

    return (
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="newsletter__content">
                            <h2>Subscribe now to get useful travelling information.</h2>
                            
                            <div className="newsletter__input">
                                <label htmlFor="newsletter-email" className="sr-only"></label>
                                <input 
                                    type="email" 
                                    id="newsletter-email" 
                                    placeholder="Enter your email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button 
                                    className="btn newsletter__btn" 
                                    type="button" 
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                            </div>
                            {error && <p className="error-text">{error}</p>}

                            <p>Stay updated with the latest travel tips, destination guides, and exclusive offers straight to your inbox!</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="Male tourist holding a map" loading="lazy" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;
