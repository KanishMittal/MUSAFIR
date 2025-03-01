// import React from "react";
// import '../styles/home.css';

// import { Container, Row, Col } from 'reactstrap';
// import worldImg from '../assets/images/world.png';
// import heroImg from '../assets/images/hero-img01.jpg';
// import heroImg02 from '../assets/images/hero-img02.jpg';
// import heroVideo from '../assets/images/hero-video.mp4';
// import experienceImg from "../assets/images/experience.png"

// import Subtitle from './../shared/Subtitle';

// import SearchBar from "../shared/SearchBar";
// import ServiceList from "../services/ServiceList";
// import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
// import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
// import Testimonials from "../components/Testimonials/Testimonials";
// import Newsletter from "../shared/Newsletter";

// const Home = () => {
//     return (
//         <>

//             {/* ======= hero section start ======= */}
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg='6'>
//                             <div className="hero__content">
//                                 <div className="hero__subtitle d-flex align-items-centre">
//                                     <Subtitle subtitle={'Know Before You Go'} />
//                                     <img src={worldImg} alt="" />
//                                 </div>
//                                 <h1>Travelling opens the door to creating{" "} <span className="highlight">
//                                     memories</span></h1>
//                                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus libero, voluptas, laboriosam quos impedit incidunt ratione corporis dolorem natus eum eius! Vel?</p>
//                             </div>
//                         </Col>
//                         <Col lg='2'>
//                             <div className="hero__img-box">
//                                 <img src={heroImg} alt="" />
//                             </div>
//                         </Col>
//                         <Col lg='2'>
//                             <div className="hero__img-box hero__video-box mt-4">
//                                 <video src={heroVideo} alt="" autoPlay loop muted />
//                             </div>
//                         </Col>
//                         <Col lg='2'>
//                             <div className="hero__img-box mt-5">
//                                 <img src={heroImg02} alt="" />
//                             </div>
//                         </Col>

//                         <SearchBar />
//                     </Row>
//                 </Container>
//             </section>
//             {/* ======= hero section end ======= */}
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg='3'>
//                             <h5 className="services__subtitle">What we serve</h5>
//                             <h2 className="services__title">We offer our best services</h2>
//                         </Col>
//                         <ServiceList />
//                     </Row>
//                 </Container>
//             </section>

//             {/* ======= featured tour section start ======= */}
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="12" className="mb-5" >
//                             <Subtitle subtitle={'Explore'} />
//                             <h2 className="featured__tour-title">Our Featured Tours</h2>
//                         </Col>
//                         <FeaturedTourList />
//                     </Row>
//                 </Container>
//             </section>
//             {/* ======= featured tour section end ======= */}

//             {/* ======= experience section start ======= */}
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="6">
//                             <div className="experience__content">
//                                 <Subtitle subtitle={'Experience'} />
//                                 <h2>With all our experience <br /> we will serve you</h2>
//                                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                                     <br />
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                 </p>
//                             </div>
//                             <div className="counter__wrapper d-flex align-items-centre gap-5">
//                                 <div className="counter__box">
//                                     <span>12k+</span>
//                                     <h6>Successful Trip</h6>
//                                 </div>
//                                 <div className="counter__box">
//                                     <span>2k+</span>
//                                     <h6>Regular Clients</h6>
//                                 </div>
//                                 <div className="counter__box">
//                                     <span>15</span>
//                                     <h6>Years Experience</h6>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col lg="6">
//                             <div className="experience__img">
//                                 <img src={experienceImg} alt="" />
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//             {/* ======= experience section end ======= */}

//             {/* ======= gallery section start ======= */}
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="12">
//                             <Subtitle subtitle={'Gallery'} />
//                             <h2 className="gallery__title">
//                                 Visit Our Customers tour gallery
//                             </h2>
//                         </Col>
//                         <Col lg="12">
//                             <MasonryImagesGallery />
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//             {/* ======= gallery section end ======= */}

//             {/* ======= testimonial section start ======= */}
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="12">
//                             <Subtitle subtitle={'Fans Love'} />
//                             <h2 className="testimonial__title">What our fans say about us</h2>
//                         </Col>
//                         <Col lg="12">
//                             <Testimonials />
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//             {/* ======= testimonial section end ======= */}
//             <Newsletter />
//         </>
//     );
// };

// export default Home;

import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import worldImg from "../assets/images/world.png";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
    return (
        <>
            {/* ======= Hero Section ======= */}
            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col lg="6">
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle="Know Before You Go" />
                                    <img src={worldImg} alt="World" loading="lazy" />
                                </div>
                                <h1>
                                    Traveling opens the door to creating{" "}
                                    <span className="highlight">memories</span>
                                </h1>
                                <p>
                                    Discover new places and experiences that will last a lifetime. 
                                    Travel beyond boundaries and embrace the beauty of the world.
                                </p>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box">
                                <img src={heroImg} alt="Hero" loading="lazy" />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box hero__video-box mt-4">
                                <video src={heroVideo} autoPlay loop muted playsInline />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="Hero 2" loading="lazy" />
                            </div>
                        </Col>
                        <Col lg="12">
                            <SearchBar />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ======= Services Section ======= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="3">
                            <h5 className="services__subtitle">What We Serve</h5>
                            <h2 className="services__title">We Offer Our Best Services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            {/* ======= Featured Tours Section ======= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
                            <Subtitle subtitle="Explore" />
                            <h2 className="featured__tour-title">Our Featured Tours</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>

            {/* ======= Experience Section ======= */}
            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col lg="6">
                            <div className="experience__content">
                                <Subtitle subtitle="Experience" />
                                <h2>With all our experience, we will serve you</h2>
                                <p>
                                    Our expertise in the travel industry ensures you get the best 
                                    experiences, tailored just for you.
                                </p>
                            </div>
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful Trips</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular Clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>15</span>
                                    <h6>Years of Experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="experience__img">
                                <img src={experienceImg} alt="Experience" loading="lazy" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ======= Gallery Section ======= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle="Gallery" />
                            <h2 className="gallery__title">Visit Our Customers' Tour Gallery</h2>
                        </Col>
                        <Col lg="12">
                            <MasonryImagesGallery />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ======= Testimonials Section ======= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle="Fans Love" />
                            <h2 className="testimonial__title">What Our Fans Say About Us</h2>
                        </Col>
                        <Col lg="12">
                            <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ======= Newsletter Section ======= */}
            <Newsletter />
        </>
    );
};

export default Home;
