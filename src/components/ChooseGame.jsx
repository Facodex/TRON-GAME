/**
 * ChooseCar component, in this component start of setting the
*/

import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChooseCarHeader } from '../components2/ChooseCarHeader';

export const ChooseGame = () => {

  return (
    <div className='chooseCar'>

        <header className='chooseCarHeader'>
          <ChooseCarHeader></ChooseCarHeader>
        </header>
        
        <section className='chooseCarContent'>
            <div className="containerCar">
                <Outlet/>
            </div>

            <div className="containerCar container3d">
              <div id='containerCar3dImg' className="box1">
              </div>
            </div>
        </section>

    </div>
  )
}
