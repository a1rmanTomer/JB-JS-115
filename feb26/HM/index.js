class Board {
  constructor() {
    this.squares = [];
    this.pieces = [];
  }
  createBoard() {
    for (let i = 0; i < 8; i++) {
      const row = [];

      const abcS = ["A", "B", "C", "D", "E", "F", "G", "H"];

      for (let j = 0; j < 8; j++) {
        row.push(abcS[j] + (i + 1));
      }
      this.squares.push(row);
    }
  }

  createPieces() {}
}

class Piece {
  constructor(_color, _kind, _serial) {
    this.color = _color;
    this.kind = _kind;
    this.serial = _serial;
    this.set = [
      "pawn",
      "pawn",
      "pawn",
      "pawn",
      "pawn",
      "pawn",
      "pawn",
      "pawn",
      "rook",
      "rook",
      "knight",
      "knight",
      "bishop",
      "bishop",
      "queen",
      "king",
    ];
  }

  createPiece(_board) {
    this.set.forEach((piece) => {
      _board.pieces.push(piece);
    });
  }
}

const board1 = new Board();
board1.createBoard();

console.log(board1);
