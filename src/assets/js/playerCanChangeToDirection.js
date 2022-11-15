import sumCoordinates from "./sumCoordinates";

// lo que hace esta funcion es recibir dos direcciones y si el resultado de las 2 es 0 entonces la direccion no es valida 
// currentDirection: { x: UNIT, 0}
// currentDirection: { x: -UNIT, 0}
export default function playerCanChangeToDirection( currentDirection, nextDirection ) {
    const result = sumCoordinates( currentDirection, nextDirection);
    return Object.keys(result).filter( coordinate => result[coordinate] !== 0).length > 0;
}