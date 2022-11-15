/**
 * This component is other of the principal components, that's why it's on components folder
 * Here there are more secondary components that finished the features of this big important component
 */

import React, { useEffect, useState } from 'react';
import { PreparingCar } from '../components2/PreparingCar';
import { SelectPilot } from '../components2/SelectPilot';

export const ChoosePilot = () => {
  const [loading, setLoading] = useState(false);

  const loadingInterval = (() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  });

  useEffect(() => {
    loadingInterval();
  }, []);
  return (
    <div>
      {
        !loading ? (<PreparingCar />) : (<SelectPilot />)
      }

    </div>
  )
}
