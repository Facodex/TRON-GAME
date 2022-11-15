/**
 * VelocityOptions component, this is a second setting that show for the created Car
 */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SaveOption } from '../assets/js/SaveOption';

export const VelocityOptions = () => {

    const [velocity, setVelocity] = useState(100);

    const handleVelocity = (e) => {
        setVelocity(e.target.value);
    };

    const saludar = () => {
        console.log('hola');
    }

    return (
        <div className='mainColorContainer'>
            <h1 className='titleCard'>¡Select the velocity!</h1>
            <form className='formOptions'>

                <label htmlFor="radio7">
                    <input type="radio" id='radio7' value={200} checked={velocity == 200 ? true : false} onChange={handleVelocity} />
                    Slow
                </label>
                <label htmlFor="radio8">
                    <input type="radio" id='radio8' value={100} checked={velocity == 100 ? true : false} onChange={handleVelocity} />
                    Normal
                </label>
                <label htmlFor="radio9">
                    <input type="radio" id='radio9' value={50} checked={velocity == 50 ? true : false} onChange={handleVelocity} />
                    Fast
                </label>

                <p className='buttons-join'>
                    <button className='btn continue'>
                        <Link to='/choose-car/color-options'>
                            Back
                        </Link>
                    </button>
                    <button className='btn continue' onClick={SaveOption(velocity, 'velocity')}>
                        <Link to='/choose-pilot'>
                            Continue
                        </Link>
                    </button>
                </p>

            </form>
        </div>
    )
}
