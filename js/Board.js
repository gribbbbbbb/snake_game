class Board {
  constructor(width, height, boardElement, restartButton, apple, snake) {
    this.width = width;
    this.height = height;
    this.apple = apple
    this.snake = snake
    this.boardElement = boardElement;
    this.cells = [];
    this.restartButton = restartButton
    this.boardRender();
  }

  boardRender() {
    for (let i = 0; i < this.height; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      this.boardElement.appendChild(row);
      this.cells.push([]);
      for (let j = 0; j < this.width; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-xy", String(i) + j);
        row.appendChild(cell);
        this.cells[i][j] = cell;
      }
    }
  }

  getCell(x, y) {
    return this.cells[y][x];
  }

  createRestartButton() {
    this.restartButton.style.display = "block";

    this.restartButton.addEventListener("click", () => {
      this.restartGame();
  });
  }

  restartGame() {
      this.cells.forEach(row => {
          row.forEach(cell => {
              cell.classList.remove("snake");
              cell.classList.remove("apple");
          });
      });
  
      this.snakeCoords = [
          { x: 5, y: 4 },
          { x: 4, y: 4 }
      ];
      this.apple.renderApple();
      this.snake.renderSnake(); 
  
      restartButton.style.display = "none"
  
      currentScore = 0
      score.textContent = "SCORE: 0"
  
      gameStarted = true;
      gameEnded = false;
      direction = "right";
  }
}