import { Cell } from "./Cell";
import { Player } from "./Player";

export class Shot {
  constructor(
    readonly id,
    readonly cell: Cell,
    readonly player: Player,
    readonly hit: boolean,
    readonly auto: boolean
  ) {}
}
