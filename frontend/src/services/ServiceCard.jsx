import React from "react";
import PropTypes from "prop-types";
import "./service-card.css";

const ServiceCard = ({ item }) => {
    const { imgUrl, title, desc } = item;

    return (
        <div className="service__item">
            <div className="service__img">
                <img src={imgUrl} alt={title} loading="lazy" />
            </div>
            <div className="service__content">
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    );
};

// PropTypes for type checking
ServiceCard.propTypes = {
    item: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired,
};

export default ServiceCard;
