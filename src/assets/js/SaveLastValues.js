/**
 * This function save te last values, car and pilot
 */
export const SaveLastValues = () => {
    let lastCar = {
        color: JSON.parse(localStorage.getItem('color')),
        velocity: JSON.parse(localStorage.getItem('velocity'))
    }
    return lastCar;
}