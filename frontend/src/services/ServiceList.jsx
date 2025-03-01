import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

// Importing images properly
const servicesData = [
    {
        imgUrl: require("../assets/images/weather.png"),
        title: "Calculate Weather",
        desc: "Get accurate weather forecasts for your trips.",
    },
    {
        imgUrl: require("../assets/images/guide.png"),
        title: "Best Tour Guide",
        desc: "Explore with experienced and knowledgeable guides.",
    },
    {
        imgUrl: require("../assets/images/customization.png"),
        title: "Customization",
        desc: "Tailor your travel experience to fit your preferences.",
    },
];

const ServiceList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList;
