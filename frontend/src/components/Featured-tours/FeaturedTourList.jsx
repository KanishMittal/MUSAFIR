import React from "react";
import TourCard from "../../shared/TourCard";
import { Col, Spinner, Alert, Row } from "reactstrap";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedTourList = () => {
    const { data: featuredTours, loading, error } = useFetch(
        `${BASE_URL}/tours/search/getFeaturedTours`
    );

    // ✅ Centered Spinner
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center my-5">
                <Spinner color="primary">Loading...</Spinner>
            </div>
        );
    }

    // ✅ Displays Specific Error Message
    if (error) {
        return <Alert color="danger">{error.message || "Failed to load tours!"}</Alert>;
    }

    // ✅ Simplified Conditional Rendering
    if (!featuredTours?.length) {
        return <Alert color="info">No featured tours available.</Alert>;
    }

    return (
        <Row>
            {featuredTours.map(tour => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                </Col>
            ))}
        </Row>
    );
};

export default FeaturedTourList;
