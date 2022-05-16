import React from 'react';
import { Col, Row } from 'react-bootstrap';
import nlpLogo from '../../../images/nlpLogo1.jpg'
import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div className='banner-container'>
            <Row xs={1} sm={1} md={2} >
                <Col className="d-flex flex-column justify-content-center">
                    <h4 className='banner-text'>Welcome to</h4>
                    <h1 className='banner-title' >Daffodil NLP Workshop</h1>
                    <h4 className='banner-text'>Bringing machine learning to the messes!</h4>
                </Col>
                <Col><img src={nlpLogo} className='banner-img' alt="" /></Col>
            </Row>

        </div>
    );
};

export default HomeBanner;