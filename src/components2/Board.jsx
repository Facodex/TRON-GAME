import React, {useEffect, useRef} from 'react'
import { UNIT, BOARD_SIZE } from '../assets/js/const';

// guardamos el tamaño de la nave  


export const Board = ({players}) => {

    // guardamos la referencia de la equiqueta para usarla en JS 
    const canvasRef = useRef();
    const color = JSON.parse(localStorage.getItem('color'));

    // pintar la tabla
    useEffect( () =>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.beginPath();
        context.strokeStyle = color;
        // bucle que pinta las lineas verticales
        for(let i = UNIT * 2; i <= BOARD_SIZE; i += UNIT * 2){
            context.moveTo(i, 0); //se mueve horizontal de 30 en 30
            context.lineTo(i, BOARD_SIZE); //traza las lineas vertical
            
        }
        for(let i = UNIT * 2; i <= BOARD_SIZE; i += UNIT * 2){
            context.moveTo(0, i); //se mueve hacia abajo de 30 en 30
            context.lineTo(BOARD_SIZE, i); //traza las lineas horizontal hasta el otro lado
            
        }
        context.stroke(); //dibuja el contexto
        context.closePath();
    }, []);


    // pinta los jugadores y sus movimientos 
    useEffect( () => {
        const context = canvasRef.current.getContext('2d');

        // por cada jugador
        players.forEach(player => {
            context.fillStyle = player.color; // dale este color al contexto
            context.fillRect(player.position.x, player.position.y, UNIT, UNIT); //dibuja el rectangulo de estas dimensiones
        });

    
    }, [players])

  return (
    <canvas ref={canvasRef} width={BOARD_SIZE} height={BOARD_SIZE} className='board'/>
  )
}