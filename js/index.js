import { Board } from './Board.js';
import { Snake } from './Snake.js';
import { Apple } from './Apple.js';

document.addEventListener("DOMContentLoaded", () => {
    const boardElement = document.querySelector(".board");
    const restartButton = document.querySelector(".button_restart");
    const scoreElement = document.querySelector(".score");
    const recordElement = document.querySelector(".record");

    const width = 10;
    const height = 10;

    const board = new Board(width, height, boardElement, restartButton, scoreElement, recordElement);
    const snake = new Snake(board);
    const apple = new Apple(snake, board);

    board.apple = apple;
    board.snake = snake;

    const record = localStorage.getItem("record");
    if (record !== null) {
        document.querySelector(".record").textContent = "RECORD:" + record
    }
});