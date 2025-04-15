const { DIRECTION_INDEX } = require("./direction");
const Robot = require("./robot").Robot;
const fs = require('fs')



fs.readFile('commands.txt', 'utf8', (err, text) => {
    let robot = new Robot(0, 0, DIRECTION_INDEX.NORTH);
    robot.processCommands(text.split("\n"));
});

// let robot = new Robot(0, 0, DIRECTION_INDEX.NORTH);
// fetch("commands.txt")
//   .then((res) => res.text())
//   .then((text) => {
//     console.log(text);
//     robot.processCommands(text.split("\n"));
//    })
//   .catch((e) => console.error(e));

// // let commands = ["PLACE 0,0,NORTH", "MOVE", "REPORT"];
// // robot.processCommands(commands);
// // commands = ["PLACE 0,0,NORTH", "LEFT", "REPORT"];
// // robot.processCommands(commands);
