import { ShipOrient } from "./ShipOrient";
import { Cell } from "./Cell";

export class ShipPosition {
  cell: Cell;
  orient: ShipOrient; //ориентация в пространстве (горизонт/верт.)
  constructor(cell: Cell, orient: ShipOrient) {
    this.cell = cell;
    this.orient = orient;
  }
}
