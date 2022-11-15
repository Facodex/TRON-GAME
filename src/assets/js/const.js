export const UNIT = 15; //size of snake
export const BOARD_SIZE = 600;

// por cada direccion ejecutar esto 
export const DIRECTIONS = {
    LEFT: { x: -UNIT, y: 0},
    RIGHT: {x: UNIT, y: 0},
    UP: { x: 0, y: -UNIT},
    DOWN: { x: 0, y: UNIT}
}

// players (keys son las teclas)
export const PLAYER_ONE = {
    color: '#CC0000',
    id: 1,
    keys: {
        38: DIRECTIONS.UP,
        39: DIRECTIONS.RIGHT,
        40: DIRECTIONS.DOWN,
        37: DIRECTIONS.LEFT
    },
    direction: DIRECTIONS.RIGHT,
    position: {x : UNIT * 3, y : UNIT * 3},
    hasDied: false
}

export const PLAYER_TWO = {
    color: '#0000CC',
    id: 2,
    keys: {
        87: DIRECTIONS.UP,
        68: DIRECTIONS.RIGHT,
        83: DIRECTIONS.DOWN,
        65: DIRECTIONS.LEFT
    },
    direction: DIRECTIONS.LEFT,
    position: {x : UNIT * 36, y : UNIT * 36},
    hasDied: false
}