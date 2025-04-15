const { DIRECTION_INDEX } = require("./direction");
const Robot = require("./robot").Robot;

let robot = new Robot(0, 0, DIRECTION_INDEX.NORTH);
let commands = ["PLACE 0,0,NORTH", "MOVE", "REPORT"];
robot.processCommands(commands);
commands = ["PLACE 0,0,NORTH", "LEFT", "REPORT"];
robot.processCommands(commands);
