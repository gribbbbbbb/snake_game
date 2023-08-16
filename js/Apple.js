class Apple {
  constructor(snake, board) {
    this.snake = snake;
    this.board = board;
  }

  renderApple() {
    let randomX, randomY;
    do {
      randomX = Math.floor(Math.random() * this.board.width);
      randomY = Math.floor(Math.random() * this.board.height);
    } while (this.snake.snakeCoords.some(coord => coord.x === randomX && coord.y === randomY));

    const appleCell = this.board.getCell(randomX, randomY);
    appleCell.classList.add("apple");
  }
}

export { Apple };