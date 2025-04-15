const { DIRECTION_INDEX } = require("./direction");
const Robot = require("./robot").Robot;
const fs = require('fs')

fs.readFile('commands.txt', 'utf8', (err, text) => {
    let robot = new Robot(0, 0, DIRECTION_INDEX.NORTH);
    robot.processCommands(text.split("\n"));
});
