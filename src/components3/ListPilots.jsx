/**
 * This component is on secondary component SelecPilot.jsx 
 * This make a API petition and receive the pilots for show
 */

import React, { useLayoutEffect, useState } from 'react';
import { petition } from '../helpers/petition';
import { SaveLastValues } from '../assets/js/SaveLastValues';
import { NavLink, Link } from 'react-router-dom';

export const ListPilots = () => {

    const [pilotsList, setPilotsList] = useState([]);
    const [pilotSelected, setPilotSelected] = useState({
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
    });


    useLayoutEffect(() => {
        setPilotsList(petition('https://reqres.in/api/users?page=1', setPilotsList));
    }, []);

    const handlePilots = (e) => {
        let pilotID = e.target.value;

        for (let pilot of pilotsList) {
            if (pilot.id == pilotID) {
                setPilotSelected(pilot);
            }
        }

    };

    return (
        <div className='ListPilots_conatiner'>
            <form>
                {
                    pilotsList.length >= 1 ?
                        pilotsList.map(item => {
                            return (

                                <div key={item.id} className={pilotSelected.id == item.id ? 'active' : ''}>
                                    <label htmlFor={'radio' + item.id}>
                                        <input type="radio" name='radiopilot' value={item.id} checked={pilotSelected.id == item.id ? true : false} onChange={handlePilots} />
                                        {item.first_name}
                                    </label>
                                </div>

                            );
                        })
                        :
                        <h1>No hay pilotos</h1>
                }
                <button className='btn continue'>
                    <Link to='/choose-game/velocity-options'>
                        Back
                    </Link>
                </button>
            </form>

            <div className="pilotCard">
                <h2>{pilotSelected.first_name} {pilotSelected.last_name}</h2>
                <img src={pilotSelected.avatar} />
                <button className='btn continue' onClick={SaveLastValues}>
                    <NavLink to='/game'>
                        PLAY
                    </NavLink>
                </button>
            </div>

        </div>
    )
}
