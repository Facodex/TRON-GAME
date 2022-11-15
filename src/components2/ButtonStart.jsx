/**
 * ButtonStart component, this button is on the Home
 */

import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonStart = () => {

  return (
    <div className='portada-content'>
        <button className='ButtonStart'>
          <Link to='/choose-game/color-options'>
            Play Now
          </Link>
        </button>
    </div>
    
  )
}
