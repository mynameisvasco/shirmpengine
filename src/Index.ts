import { Engine } from "./core/Engine";
import { Rectangle } from "./core/objects/Rectangle";
import { Vector } from "matter-js";
import { Controller } from "./core/objects/Controller";
import { Ground } from "./core/objects/Ground";
import { Game } from "./Game";

const engine: Engine = new Engine(
  1280,
  720,
  60,
  <HTMLCanvasElement>document.getElementById("myCanvas")
);

const game: Game = new Game(engine);

const r1 = new Rectangle("r1", 120, 120, "#FF0000", Vector.create(100, 50));
const myController = new Controller("player", r1);
const ground = new Ground(
  "Ground",
  new Rectangle("groundRect", 250, 10, "#000000", Vector.create(200, 200)),
  50
);
const ground2 = new Ground(
  "Ground2",
  new Rectangle("groundRect2", 250, 120, "#000000", Vector.create(200, 600)),
  50
);

game.addGameObject(myController);
game.addGameObject(ground);
game.addGameObject(ground2);
engine.start(game);