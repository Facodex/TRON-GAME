/**
 * ColorOptions component, this is a first setting that show for the created Car
 */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SaveOption } from '../assets/js/SaveOption';

export const ColorOptions = () => {

    const [color, setColor] = useState('red');

    const handleColors = (e) => {
        setColor(e.target.value);
    };



    return (
        <div className='mainColorContainer'>
            <h1 className='titleCard'>GRID COLOR !</h1>
            <form className='formOptions'>

                <label htmlFor="radio1">
                    <input type="radio" id='radio1' value='red' checked={color == 'red' ? true : false} onChange={handleColors} />
                    Red
                </label>
                <label htmlFor="radio2">
                    <input type="radio" id='radio2' value='blue' checked={color == 'blue' ? true : false} onChange={handleColors} />
                    Blue
                </label>
                <label htmlFor="radio3">
                    <input type="radio" id='radio3' value='green' checked={color == 'green' ? true : false} onChange={handleColors} />
                    Green
                </label>
                <label htmlFor="radio4">
                    <input type="radio" id='radio4' value='black' checked={color == 'black' ? true : false} onChange={handleColors} />
                    Black
                </label>
                <label htmlFor="radio5">
                    <input type="radio" id='radio5' value='white' checked={color == 'white' ? true : false} onChange={handleColors} />
                    White
                </label>
                <button className='btn continue' onClick={SaveOption(color, 'color')}>
                    <Link to='/choose-game/velocity-options'>
                        Continue
                    </Link>
                </button>

            </form>
        </div>
    )
}
