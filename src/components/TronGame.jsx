import React, { useEffect, useReducer } from 'react';
import { Board } from '../components2/Board';
import { BOARD_SIZE, PLAYER_ONE, PLAYER_TWO, UNIT } from '../assets/js/const';
import useInterval from '../hooks/useInterval';
import sumCoordinates from '../assets/js/sumCoordinates';
import getPlayableCells from '../assets/js/getPlayableCells';
import playerCanChangeToDirection from '../assets/js/playerCanChangeToDirection';
import getCellKey from '../assets/js/getCellKey';
import { useState } from 'react';

const players = [PLAYER_ONE, PLAYER_TWO]; //estado del reducer
const initialState = {
  players,
  playableCells: getPlayableCells(BOARD_SIZE, UNIT, players.map(player => getCellKey(player.position.x, player.position.y)))
}

function updateGame(game, action) {
  if (action.type === 'move') {  //mueve a los jugadores a su siguiente posicion
    //update player state
    const newPlayers = game.players.map(player => ({
      ...player,
      position: sumCoordinates(player.position, player.direction)
    }));

    const newPlayersWithCollision = newPlayers.map(player => {
      const myCellKey = getCellKey(player.position.x, player.position.y);
      return {
        ...player,
        hasDied:
          !game.playableCells.includes(myCellKey) ||
          newPlayers
            .filter((p) => p.id !== player.id)
            .map((p) => getCellKey(p.position.x, p.position.y))
            .includes(myCellKey)
      };
    });

    const newOcupiedCells = game.players.map(player => getCellKey(player.position.x, player.position.y))

    const playableCells = game.playableCells.filter(playableCell => {
      return !newOcupiedCells.includes(playableCell);
    });

    return {
      players: newPlayersWithCollision,
      playableCells: playableCells
    }
  }

  if (action.type === 'changeDirection') {
    const newPlayers = game.players.map(player => (
      {
        ...player,
        // si el jugador tiene esa tecla que se presionó y la direccion es valida, declarada en su constante entonces dale esa direccion
        direction: player.keys[action.key] && playerCanChangeToDirection(player.direction, player.keys[action.key]) ? player.keys[action.key] : player.direction
      }
    ));
    return {
      players: newPlayers,
      playableCells: game.playableCells
    }
  }
}

function refresh(){
  location.reload();
}

function TronGame() {

  const [game, gameDispatch] = useReducer(updateGame, initialState);
  const velocity = JSON.parse(localStorage.getItem('velocity'));

  // comporbando si los jugadores murieron
  const players = game.players;
  const diedPlayers = players.filter(player => player.hasDied);

  if (diedPlayers.length > 0) {
    console.log(diedPlayers);
  }

  useInterval(() => {
    gameDispatch({ type: 'move' });
  }, diedPlayers.length > 0 ? null : velocity);


  useEffect(() => {

    function handleKeyPress(e) {
      const key = `${e.keyCode}`;
      gameDispatch({ type: 'changeDirection', key });
    }

    document.addEventListener('keydown', handleKeyPress);
    return function cleanUp() {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  return (
    <div className='containerBoard'>

      <Board players={game.players} />

      <section className="gameResult">
        <div className="containerGameResult">
          {
            diedPlayers.length > 0 &&
            diedPlayers.map((player) => {
              return (<h2 key={player.id} className='gameEnd'> PLAYER {player.id} LOST </h2>);
            })
          }
          <button className="btn restart" onClick={refresh}>
            RESTART
          </button>
        </div>
      </section>


    </div>

  )
}

export default TronGame;

