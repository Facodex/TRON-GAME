/**
 * This component is where I could choose a Pilot, will has a list of a pilots with your data.
 */
import React from 'react'
import { ListPilots } from '../components3/ListPilots'
import { ChooseCarHeader } from './ChooseCarHeader'

export const SelectPilot = () => {
    return (
        <div className='chooseCar'>

            <header className='chooseCarHeader'>
                <ChooseCarHeader></ChooseCarHeader>
            </header>

            <section className='chooseCarContent'>
                <div className="listPilots">
                    <ListPilots />
                </div>
            </section>

        </div>
    )
}
