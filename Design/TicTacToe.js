class TicTacToe {
  #rows;
  #cols;
  #diagonal;
  #antiDiagonal;

  constructor(N) {
    this.#cols = new Array(N).fill(null);
    this.#rows = new Array(N).fill(null);
  }

  /** Player {player} makes a move at ({row}, {col}).
    @param row The row of the board.
    @param col The column of the board.
    @param player The player, can be either 1 or 2.
    @return The current winning condition, can be either:
            0: No one wins.
            1: Player 1 wins.
            2: Player 2 wins. */

  move = (row, col, player) => {
    let toAdd = player === 1 ? 1 : -1;
    this.#rows[row] += toAdd;
    this.#cols[col] += toAdd;

    if (row === col) this.#diagonal += toAdd;
    if (col === this.#cols.length - row - 1) this.#antiDiagonal += toAdd;

    let size = this.#rows.length;
    if (
      Math.abs(this.#rows[row]) === size ||
      Math.abs(this.#cols[col]) === size ||
      Math.abs(this.#diagonal) === size ||
      Math.abs(this.#antiDiagonal) === size
    )
      return player;
    return 0;
  };
  get matrix() {
    return this.#rows;
  }
}

const toe = new TicTacToe(3);
toe.move(0, 0, 1);
toe.move(0, 2, 2);
toe.move(2, 2, 1);
toe.move(1, 1, 2);
toe.move(2, 0, 1);
toe.move(1, 0, 2);
console.log(toe.move(2, 1, 1));
