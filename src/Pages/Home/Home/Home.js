import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>

            <HomeBanner></HomeBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;