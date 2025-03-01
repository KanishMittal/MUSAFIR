import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { BASE_URL } from './../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const locationRef = useRef(null);
    const distanceRef = useRef(null);
    const maxGroupSizeRef = useRef(null);
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current?.value.trim();
        const distance = distanceRef.current?.value.trim();
        const maxGroupSize = maxGroupSizeRef.current?.value.trim();

        if (!location || !distance || !maxGroupSize) {
            alert("All fields are required!");
            return;
        }

        try {
            const res = await fetch(
                `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
            );

            if (!res.ok) {
                throw new Error("Something went wrong");
            }

            const result = await res.json();
            if (!result.data) {
                alert("No results found");
                return;
            }

            navigate(
                `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
                { state: result.data }
            );
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Col lg="12">
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4" onSubmit={(e) => e.preventDefault()}>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Location</h6>
                            <Input type="text" placeholder="Where are you going?" innerRef={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                            <h6>Distance</h6>
                            <Input type="number" placeholder="Distance (km)" innerRef={distanceRef} min="1" />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span>
                            <i className="ri-group-line"></i>
                        </span>
                        <div>
                            <h6>People</h6>
                            <Input type="number" placeholder="0" innerRef={maxGroupSizeRef} min="1" />
                        </div>
                    </FormGroup>

                    <button className="search__icon" type="button" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </button>
                </Form>
            </div>
        </Col>
    );
}

export default SearchBar;
