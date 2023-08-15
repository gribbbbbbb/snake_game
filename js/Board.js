class Board {
  constructor(width, height, boardElement, restartButton, scoreElement, recordElement, apple, snake) {
    this.width = width;
    this.height = height;
    this.apple = apple;
    this.snake = snake;
    this.scoreElement = scoreElement;
    this.boardElement = boardElement;
    this.recordElement = recordElement
    this.cells = [];
    this.currentScore = 0;
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

  updateScore(score) {
    this.currentScore = score;
    this.scoreElement.textContent = `SCORE:${score}`;
  }

  updateRecord() {
    const record = localStorage.getItem("record");
    if (record === null || this.currentScore > parseInt(record)) {
      localStorage.setItem("record", this.currentScore);
      this.recordElement.textContent = "RECORD:" + this.currentScore;
    }
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

    this.snake.snakeCoords = this.snakeCoords;
    this.apple.renderApple();
    this.snake.renderSnake(); 

    this.restartButton.style.display = "none"

    this.snake.gameEnded = false;
    this.gameStarted = true;
    this.currentScore = 0
    this.scoreElement.textContent = "SCORE:0"

    
    this.snake.direction = "right";
  }
}


export { Board };