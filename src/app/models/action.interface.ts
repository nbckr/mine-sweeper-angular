export interface Action {

  // mandatory
  action: string;

  // flag and reveal moves
  row?: number;
  col?: number;

  // start game
  size?: string;
  difficulty?: string;
}
