import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>This is Home Component</h2>
            <Link to='/login'> Login</Link>
        </div>
    );
};

export default Home;