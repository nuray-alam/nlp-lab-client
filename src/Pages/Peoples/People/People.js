import React from 'react';
import { Col } from 'react-bootstrap';
import './People.css'

const People = (props) => {

    const people = props.people;

    const { imgUrl, name, position, fbLink, linkedInLink, twitterLink } = people;


    return (
        <Col>
            <div className="bike text-justify py-2 px-3 card h-100 d-flex flex-column justify-content-between">

                <div className='text-center'>
                    <img src={imgUrl} className="img-fluid people-img" alt="" />
                    <h4 className="text-dark mt-1">{name}</h4>
                    <h5 style={{ color: 'gray' }}>Position: {position}</h5>
                    <p>
                        <a href={fbLink} className="link" ><i className="fab fa-facebook fs-5 pe-3"></i></a>
                        <a href={twitterLink} className="link" ><i className="fab fa-twitter fs-5 pe-3"></i></a>
                        <a href={linkedInLink} className="link" ><i className="fab fa-linkedin fs-5 pe-3"></i></a>
                    </p>
                </div>

            </div>
        </Col>
    );
};

export default People;