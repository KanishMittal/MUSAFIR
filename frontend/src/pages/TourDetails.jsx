import React, { useState, useEffect, useRef, useContext } from "react";
import { Container, Row, Col, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import "../styles/tour-details.css";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from './../context/AuthContext';

const TourDetails = () => {
    const { id } = useParams();
    const reviewMsgRef = useRef(null);
    const [tourRating, setTourRating] = useState(null);
    const { user } = useContext(AuthContext);

    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

    useEffect(() => {
        if (!loading && !error) window.scrollTo(0, 0);
    }, [loading, error]);

    if (!tour) {
        return <h2 className="text-center">Tour not found</h2>;
    }

    const { photo, title, desc, price, address, reviews, city, maxGroupSize, distance } = tour;
    const { totalRating, avgRating } = calculateAvgRating(reviews);

    const options = { day: "numeric", month: "long", year: "numeric" };

    const submitHandler = async (e) => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value.trim();

        if (!user) {
            alert('Please sign in to submit a review.');
            return;
        }

        if (!reviewText || tourRating === null) {
            alert('Please provide a rating and review.');
            return;
        }

        try {
            const reviewObj = {
                username: user?.username,
                reviewText,
                rating: tourRating,
            };
            const res = await fetch(`${BASE_URL}/review/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(reviewObj),
            });
            const result = await res.json();

            if (!res.ok) {
                return alert(result.message);
            }

            alert('Review submitted successfully!');
            setTourRating(null);
            reviewMsgRef.current.value = ""; // Clear input AFTER successful submission
        } catch (err) {
            alert(`Error submitting review: ${err.message}`);
        }
    };

    return (
        <>
            <section>
                <Container>
                    {loading && <h4 className="text-center pt-5">Loading...</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                    {!loading && !error && (
                        <Row>
                            <Col lg="8">
                                <div className="tour__content">
                                    <img src={photo} alt={title} loading="lazy" />
                                    <div className="tour__info">
                                        <h2>{title}</h2>
                                        <div className="d-flex align-items-center gap-5">
                                            <span className="tour__rating d-flex align-items-center gap-1">
                                                <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                                                {totalRating === 0 ? "Not Rated" : avgRating}
                                                {reviews?.length > 0 && <span>({reviews.length})</span>}
                                            </span>
                                            <span><i className="ri-map-pin-user-fill"></i> {address}</span>
                                        </div>
                                        <div className="tour__extra-details">
                                            <span><i className="ri-map-pin-2-line"></i> {city}</span>
                                            <span><i className="ri-money-dollar-circle-line"></i> ${price}/per person</span>
                                            <span><i className="ri-map-pin-time-line"></i> {distance} km</span>
                                            <span><i className="ri-group-line"></i> {maxGroupSize} people</span>
                                        </div>
                                        <h5>Description</h5>
                                        <p>{desc}</p>
                                    </div>
                                </div>

                                {/*=== Tour Reviews Section ===*/}
                                <div className="tour__reviews mt-4">
                                    <h4>Reviews ({reviews?.length})</h4>
                                    <form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span 
                                                    key={star} 
                                                    onClick={() => setTourRating(star)}
                                                    className={tourRating === star ? "selected" : ""}
                                                    style={{
                                                        cursor: "pointer",
                                                        color: tourRating >= star ? "#ffc107" : "#000",
                                                        transition: "color 0.2s ease-in-out",
                                                    }}
                                                    role="button"
                                                    tabIndex={0}
                                                    aria-label={`Rate ${star} stars`}
                                                >
                                                    {star} <i className="ri-star-s-fill"></i>
                                                </span>
                                            ))}
                                        </div>
                                        <div className="review__input">
                                            <input 
                                                type="text" 
                                                ref={reviewMsgRef} 
                                                placeholder="Share your thoughts" 
                                                required 
                                                aria-label="Review input"
                                            />
                                            <button className="btn primary__btn text-white" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    <ListGroup className="user__reviews">
                                        {reviews?.map((review, index) => (
                                            <div className="review__item" key={index}>
                                                <img src={avatar} alt="User avatar" loading="lazy" />
                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5>{review.username}</h5>
                                                            <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                                                        </div>
                                                        <span className="d-flex align-items-center">
                                                            {review.rating} <i className="ri-star-s-fill"></i>
                                                        </span>
                                                    </div>
                                                    <h6>{review.reviewText}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </ListGroup>
                                </div>
                            </Col>
                            <Col lg="4">
                                <Booking tour={tour} avgRating={avgRating} />
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
            <Newsletter />
        </>
    );
};

export default TourDetails;
