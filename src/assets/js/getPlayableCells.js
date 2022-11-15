import getCellKey from "./getCellKey";

export default function getPlayableCells(BOARD_SIZE, CELL_SIZE, INITIAL_POSTION_PLAYERS){
    const playableCells = [];

    for(let i = 0; i < BOARD_SIZE / CELL_SIZE; i++){
        for(let j = 0; j < BOARD_SIZE / CELL_SIZE; j++){
            const cellKey = getCellKey(i * CELL_SIZE, j * CELL_SIZE);
            if( !INITIAL_POSTION_PLAYERS.includes(cellKey)){
                playableCells.push(cellKey);
            }
        }
    }
    return playableCells;
}