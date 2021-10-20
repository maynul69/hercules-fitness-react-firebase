import React from 'react';
import Services from '../../Services/Services';
import DifferentWorkout from '../DifferentWorkouts/DifferentWorkout';
import Slider from '../Slider/Slider';
import Motto from '../TrainningStrategy/Motto';



const Home = () => {
    return (
        <div id='home' >
            <Slider></Slider>
            <Services></Services>
            <Motto></Motto>
            <DifferentWorkout></DifferentWorkout>
        </div>
    );
};

export default Home;