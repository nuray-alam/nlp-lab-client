import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer-container mt-5">
            <hr />
            <Row xs={1} sm={1} md={3} className='p-2'>
                <Col>
                    <h3>NLP Lab</h3>
                    <small>Follow us on social media</small> <br />
                    <a href="" className="link" ><i className="fab fa-facebook fs-5 pe-3"></i></a>
                    <a href="" className="link" ><i className="fab fa-instagram fs-5 pe-3"></i></a>
                    <a href="" className="link" ><i className="fab fa-twitter fs-5 pe-3"></i></a>
                    <a href="" className="link" ><i className="fab fa-linkedin fs-5 pe-3"></i></a>
                </Col>

                <Col>
                    <h6>USEFUL LINKS</h6>
                    <ul className='link-list'>
                        <li><a href="/home">Home</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Terms of service</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </Col>
                <Col>
                    <h6>CONTACT US</h6>
                    <small>Sukrabad</small> <br />
                    <small>Dhanmondhi</small> <br />
                    <small>Bangladesh</small> <br />
                    <strong>Phone: </strong> <small>+88010000000</small> <br />
                    <strong>Email: </strong> <small>mail@mail.com</small>
                </Col>
            </Row>
            <hr className='mb-0' />
            <p className="text-center mb-0">
                © Copyright DIU NLP Lab. All Rights Reserved
            </p>
            <hr className='mt-0' />
        </div>

    );
};

export default Footer;