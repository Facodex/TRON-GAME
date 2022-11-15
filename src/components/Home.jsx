
/**
 * Home component, the fisrt page of the project 
*/

import React from 'react';
import { ButtonStart } from '../components2/ButtonStart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import tronBack from '../assets/images/tron-back1.jpg';

export const Home = () => {

  return (
    <div className='home'>
      <div className='homeMenu' style={{ fontSize: '25px' }}>
        <FontAwesomeIcon icon={faGear} />
        <FontAwesomeIcon icon={faCircleInfo} />
        <FontAwesomeIcon icon={faPalette} />
      </div>
      <div className='homeContent'>
        <section>
          <h1 className="mainTitle">TRON GAME</h1>
          <div className='tronMask'>
            <img className='imgTronBack' src={tronBack} />
          </div>
          <ButtonStart></ButtonStart>
        </section>
      </div>
    </div>
  )
}
