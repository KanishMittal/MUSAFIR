import React from "react";
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const testimonialsData = [
    {
        text: "This product completely changed the way I work. The functionality and design are top-notch, and it has saved me so much time! I highly recommend it to anyone looking for an easy-to-use yet powerful solution.",
        image: ava01,
        name: "John Doe",
        role: "Customer"
    },
    {
        text: "I’ve tried many similar services, but none have impressed me as much as this one. The support team is incredibly responsive, and the results I’ve seen speak for themselves. It’s definitely worth every penny!",
        image: ava02,
        name: "Lia Franklin",
        role: "Customer"
    },
    {
        text: "From the first use, I knew this was something special. It’s user-friendly, efficient, and reliable. I can’t imagine going back to my old methods. If you're on the fence, trust me, it’s worth the investment!",
        image: ava03,
        name: "John Doe",
        role: "Customer"
    },
    {
        text: "I had some initial doubts, but this product exceeded all my expectations. The features are exactly what I needed, and I’ve noticed a significant improvement in my workflow. Highly recommended!",
        image: ava02,
        name: "Lia Franklin",
        role: "Customer"
    },
    {
        text: "I’ve been using this for several months now, and I couldn’t be happier. It’s made my daily tasks so much easier. The best part is how intuitive and easy it is to get started. Truly a game changer!",
        image: ava03,
        name: "John Doe",
        role: "Customer"
    }
];

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
                <div className="testimonial py-4 px-3" key={index}>
                    <p>{testimonial.text}</p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={testimonial.image} className="w-25 h-25 rounded-2" alt={`Avatar of ${testimonial.name}`} />
                        <div>
                            <h6 className="mb-0 mt-3">{testimonial.name}</h6>
                            <p>{testimonial.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Testimonials;