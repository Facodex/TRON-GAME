import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Home } from '../components/Home';
import { ChooseGame } from '../components/ChooseGame';
import { ColorOptions } from '../components2/ColorOptions';
import { VelocityOptions } from '../components2/VelocityOptions';
import { BrandOptions } from '../components2/BrandOptions';
import { ChoosePilot } from '../components/ChoosePilot';
import TronGame from '../components/TronGame';

export const MainRoutes = () => {
    return (
        <BrowserRouter>


            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/choose-game/*' element={<ChooseGame />} >
                    <Route path='color-options' element={<ColorOptions/>}/>
                    <Route path='velocity-options' element={<VelocityOptions/>}/>
                </Route>
                <Route path='/choose-pilot' element={<ChoosePilot/>} />
                <Route path='/game' element={<TronGame/>} />
                <Route path='*' element={<Home />} />

            </Routes>


        </BrowserRouter>
    )
}
