import React from "react";
import { Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import "./tour-card.css";

const TourCard = ({ tour }) => {
    const { _id, title, city, photo, price, featured, reviews } = tour;
    const { totalRating, avgRating } = calculateAvgRating(reviews);
    const navigate = useNavigate();

    return (
        <div className="tour-card">
            <Card>
                {/* ✅ Improved Alt Text */}
                <div className="tour-card__img" onClick={() => navigate(`/tours/${_id}`)} style={{ cursor: "pointer" }}>
                    <img src={photo} alt={`Tour: ${title}`} />
                    {featured && <span className="tour-card__featured">Featured</span>}
                </div>

                <CardBody>
                    <div className="tour-card__top d-flex align-items-center justify-content-between">
                        <span className="tour-card__location d-flex align-items-center gap-1">
                            <i className="ri-map-pin-line"></i> {city}
                        </span>

                        <span className="tour-card__rating d-flex align-items-center gap-1">
                            <i className="ri-star-fill"></i> {avgRating > 0 ? avgRating : "Not Rated"}
                            {totalRating > 0 && <span>({reviews.length})</span>}
                        </span>
                    </div>

                    <h5 className="tour-card__title" onClick={() => navigate(`/tours/${_id}`)} style={{ cursor: "pointer" }}>
                        {title}
                    </h5>

                    <div className="tour-card__bottom d-flex align-items-center justify-content-between mt-3">
                        <h5>
                            ${price} <span>/ per person</span>
                        </h5>

                        {/* ✅ Improved Button Clickability */}
                        <button className="btn booking-btn" onClick={() => navigate(`/tours/${_id}`)}>
                            Book Now
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default TourCard;
