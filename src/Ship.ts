import { ShipPosition } from "./ShipPosition";
import { Player } from "./Player";

export class Ship {
  public hp: number;
  public position: ShipPosition | undefined;
  constructor(public readonly length: number, public readonly player: Player) {
    this.hp = length;
  }
}
