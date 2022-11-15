/**
 * This funcion will be to save option that choose user for the car
 * state: The state of the option, could be red, 1.8, Audi
 * nameItem: name item to save in the localstorage
 */

export const SaveOption = (myState, nameItem) => {
  
    localStorage.setItem(nameItem, JSON.stringify(myState));

}
