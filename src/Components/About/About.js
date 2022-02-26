import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            About
            <nav>
                <Link to="/home">Home</Link>
            </nav>
        </div>
    );
};

export default About;