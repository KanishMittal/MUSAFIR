// import React from "react";
// import ServiceCard from "./ServiceCard";
// import { Col } from "reactstrap";

// const weatherImg = "/assets/images/weather.png";
// const guideImg = "/assets/images/guide.png";
// const customizationImg = "/assets/images/customization.png";


// const servicesData = [
//     {
//         imgUrl: weatherImg,
//         title: "Calculate Weather",
//         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     },
//     {
//         imgUrl: guideImg,
//         title: "Best Tour Guide",
//         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     },
//     {
//         imgUrl: customizationImg,
//         title: "Customization",
//         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     },
// ]

// const ServiceList = () => {
//     return (
//         <>
//             {servicesData.map((item, index) => (
//                 <Col lg="3" md='6' sm='12' className="mb-4" key={index}>
//                     <ServiceCard item={item} />
//                 </Col>
//             ))}
//         </>
//     );
// };

// export default ServiceList;


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
