document.addEventListener("DOMContentLoaded", () => {
    const boardElement = document.querySelector(".board");
    const restartButton = document.querySelector(".button_restart");
    const width = 10;
    const height = 10;

    const board = new Board(width, height, boardElement, restartButton);
    const snake = new Snake(board);
    const apple = new Apple(snake, board);

    board.apple = apple;
});