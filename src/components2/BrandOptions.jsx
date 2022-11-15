/**
 * BrandOptions component, this is a thrid setting that show for the created Car
 */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SaveOption } from '../assets/js/SaveOption';

export const BrandOptions = () => {

    const [brand, setBrand] = useState('Mercedez Benz');

    const hanldeBrand = (e) => {
        setBrand(e.target.value);
    };


    return (
        <div className='mainColorContainer'>
            <h1 className='titleCard'>¡Select the brand!</h1>
            <form className='formOptions'>

                <label htmlFor="radio11">
                    <input type="radio" id='radio11' value='Mercedez Benz' checked={brand == 'Mercedez Benz' ? true : false} onChange={hanldeBrand} />
                    Mercedez Benz
                </label>
                <label htmlFor="radio12">
                    <input type="radio" id='radio12' value='Corvette' checked={brand == 'Corvette' ? true : false} onChange={hanldeBrand} />
                    Corvette
                </label>
                <label htmlFor="radio13">
                    <input type="radio" id='radio13' value='Audi' checked={brand == 'Audi' ? true : false} onChange={hanldeBrand} />
                    Audi
                </label>
                <label htmlFor="radio14">
                    <input type="radio" id='radio14' value='Lamborghini' checked={brand == 'Lamborghini' ? true : false} onChange={hanldeBrand} />
                    Lamborghini
                </label>
                <label htmlFor="radio15">
                    <input type="radio" id='radio15' value='Ferrari' checked={brand == 'Ferrari' ? true : false} onChange={hanldeBrand} />
                    Ferrari
                </label>

                <p className='buttons-join'>
                    <button className='btn continue'>
                        <Link to='/choose-car/engine-options'>
                            Back
                        </Link>
                    </button>

                    <button className='btn continue' onClick={SaveOption(brand, 'brand')}>
                        <Link to='/choose-pilot'>
                            Continue
                        </Link>
                    </button>
                </p>

            </form>

            <p>{brand}</p>
        </div>
    )
}