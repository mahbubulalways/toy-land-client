import React from 'react';
import Carousel from './Carousel';
import Gallery from './Gallery';
import ReactTab from './ReactTab';
import OurService from '../ExtraSection/OurService';
import CustomerReview from '../ExtraSection/CustomerReview';
import useTitle from '../Hooks/useTitle';


const Home = () => {
    useTitle('-home')
    return (
        <div>
            <Carousel></Carousel>
            <Gallery></Gallery>
            <ReactTab></ReactTab>
            <OurService></OurService>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;