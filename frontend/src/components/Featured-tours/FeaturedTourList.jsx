import React from "react";
import TourCard from "../../shared/TourCard";
import { Col, Spinner, Alert } from 'reactstrap';

import useFetch from './../../hooks/useFetch';
import { BASE_URL } from './../../utils/config';

const FeaturedTourList = () => {
    const { data: featuredTours, loading, error } = useFetch(
        `${BASE_URL}/tours/search/getFeaturedTours`
    );

    console.log('BASE_URL:', BASE_URL);
    console.log('Featured Tours:', featuredTours);
    console.log('Error:', error);

    if (loading) return <Spinner color="primary">Loading...</Spinner>;
    if (error) return <Alert color="danger">Failed to load tours!</Alert>;
    console.log(featuredTours);

    return (
        <>
            {featuredTours?.length > 0 ? (
                featuredTours.map(tour => (
                    <Col lg='3' className="mb-4" key={tour._id}>
                        <TourCard tour={tour} />
                    </Col>
                ))
            ) : (
                <Alert color="info">No featured tours available.</Alert>
            )}
        </>
    );
};

export default FeaturedTourList;