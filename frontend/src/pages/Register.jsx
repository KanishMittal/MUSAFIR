// import React, { useState, useContext } from "react";

// import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom'
// import '../styles/login.css'

// import registerImg from '../assets/images/login.png'
// import userIcon from '../assets/images/user.png'

// import {AuthContext} from './../context/AuthContext'
// import {BASE_URL} from './../utils/config'

// const Register = () => {

//     const [credentials, setCredentials] = useState({
//         userName: undefined,
//         email: undefined,
//         password: undefined
//     });

//     const {dispatch} = useContext(AuthContext)
//     const navigate = useNavigate()

//     const handleChange = e => {
//         setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))

//     };
//     const handleClick = async e => {
//         e.preventDefault();

//         try {
//             const res = await fetch(`${BASE_URL}/auth/register`,{
//                 method:'post',
//                 headers:{
//                     'content-type':'applications/json'
//                 },
//                 body: JSON.stringify(credentials)
//             })

//             const result = await res.json()

//             if(!res.ok) alert(result.message)

//             dispatch({type:'REGISTER_SUCCESS'})
//             navigate('/login')
//         } catch (err) {
//             alert(err.message);
//         }
//     }

//     return <section>
//         <Container>
//             <Row>
//                 <Col lg='8' className="m-auto">
//                     <div className="login__container d-flex justify-content-between">
//                         <div className="login__img">
//                             <img src={registerImg} alt="" />
//                         </div>
//                         <div className="login__form">
//                             <div className="user">
//                                 <img src={userIcon} alt="" />
//                             </div>
//                             <h2>
//                                 Register
//                             </h2>
//                             <Form onSubmit={handleClick}>
//                                 <FormGroup>
//                                     <input type="text" placeholder="Username" require id="username"
//                                         onChange={handleChange} />

//                                 </FormGroup>
//                                 <FormGroup>
//                                     <input type="password" placeholder="Password" require id="password"
//                                         onChange={handleChange} />

//                                 </FormGroup>
//                                 <Button className="btn secondary__btn auth__btn"
//                                     type="submit">
//                                     Create Account
//                                 </Button>
//                             </Form>
//                             <p>
//                                 Already have an account ?<Link to='/login'>Create</Link>
//                             </p>
//                         </div>
//                     </div>

//                 </Col>
//             </Row>
//         </Container>
//     </section>
// };

// export default Register;

import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

import registerImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",  // ✅ Fixed field name to match backend
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ Fixed header type
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      console.log("API Response:", result); // ✅ Debugging Response

      if (!res.ok) {
        alert(result.message || "Failed to Create, try again!");
        return;
      }

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      console.error("Error:", err);
      alert("Error: " + err.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="Register" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="User Icon" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username" // ✅ Fixed ID to match backend
                      value={credentials.username}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
