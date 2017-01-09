import {Cell} from "./grid/cell.model";

export class GameData {

  constructor(public state: String,
              public grid: Cell[]) {}
              //public grid: Cell[][]) {}
}
