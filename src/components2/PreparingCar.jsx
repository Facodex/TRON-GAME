/**
 * This component make the effect and animation of loading before choose a pilot
 */
import React from 'react'
import ferrari from '../assets/images/moto-back-removebg-preview.png';
import bugatti from '../assets/images/moto-blue-removebg-preview.png';
import maserati from '../assets/images/moto-yellow-removebg-preview.png';
import lamborghini from '../assets/images/moto-blueXL-removebg-preview.png';

export const PreparingCar = () => {
    return (
        <div className='loading-medium-container'>
            <div className="loading-medium">
                <div className="glitch" data-text="PREPARING CAR!">PREPARING GAME!</div>
                <div className='img-moto'><img className='imgCar1' src={ferrari} /></div>
                <div className='img-moto'><img className='imgCar3' src={maserati} /></div>
                <div className='img-moto'><img className='imgCar4' src={lamborghini} /></div>
                <div className='img-moto'><img className='imgCar2' src={bugatti} /></div>
            </div>
        </div>
    )
}
