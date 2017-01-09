export class Cell {
  constructor(hasMine: boolean = false,
              isFlagged: boolean = false,
              isRevealed: boolean = false,
              position: Object = {row: 0, col: 0},
              surroundingMines: number = 0) {
  }
}
