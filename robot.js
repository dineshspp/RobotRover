const { DIRECTION_INDEX, DIRECTION } = require("./direction");
const TABLE_TOP = require("./tabletop").TABLE_TOP;

class Robot {
    constructor(x, y, direction) {
        this.x = 0;
        this.y = 0;
        this.direction = DIRECTION_INDEX.NORTH;
    }

    place(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    move() {
        let newX = this.x;
        let newY = this.y;
        switch (this.direction) {
            case DIRECTION_INDEX.NORTH:
                newY = this.y + 1;
                break;
            case DIRECTION_INDEX.EAST:
                newX = this.x + 1;
                break;
            case DIRECTION_INDEX.SOUTH:
                newY = this.y - 1;
                break;
            case DIRECTION_INDEX.WEST:
                newX = this.x - 1;
                break;
        }
        if (newX < 0 || newX > TABLE_TOP.X || newY < 0 || newY > TABLE_TOP.y) {  
            console.log("Out of boundaries");
        }
        else {
            this.x = newX;
            this.y = newY;
        }
    }

    left() {
        switch (this.direction) {
            case DIRECTION_INDEX.NORTH:
                this.direction = DIRECTION_INDEX.WEST;
                break;
            case DIRECTION_INDEX.SOUTH:
                this.direction = DIRECTION_INDEX.EAST;
                break;
            case DIRECTION_INDEX.EAST:
                this.direction = DIRECTION_INDEX.NORTH;
                break;
            case DIRECTION_INDEX.WEST:
                this.direction = DIRECTION_INDEX.SOUTH;
                break;
            default:
                break;
        }
    }

    right() {
        switch (this.direction) {
            case DIRECTION_INDEX.NORTH:
                this.direction = DIRECTION_INDEX.EAST;
                break;
            case DIRECTION_INDEX.SOUTH:
                this.direction = DIRECTION_INDEX.WEST;
                break;
            case DIRECTION_INDEX.EAST:
                this.direction = DIRECTION_INDEX.SOUTH;
                break;
            case DIRECTION_INDEX.WEST:
                this.direction = DIRECTION_INDEX.NORTH;
                break;
            default:
                break;
        }
    }

    report() {
        return `(${this.x}, ${this.y}) ${DIRECTION[this.direction].name}`;
    }

    processCommands(commands) {
        for (let command of commands) {
            if (command.startsWith("PLACE")) {
                let [x, y, direction] = command.replace("PLACE ", "").split(",");
                this.place(parseInt(x.trim()), parseInt(y.trim()), DIRECTION_INDEX[direction.trim()]);
            }
            else if (command.startsWith("MOVE")) {
                this.move();
            }
            else if (command.startsWith("LEFT")) {
                this.left();
            }
            else if (command.startsWith("RIGHT")) {
                this.right();
            }
            else if (command.startsWith("REPORT")) {
                console.log(this.report());
            }
            else {
                console.log("Unknown command");
            }
        }   
    }
}

module.exports.Robot = Robot;
