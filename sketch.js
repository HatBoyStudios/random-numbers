var srp_x = Math.floor(Math.random() * 42)+1;
var srp_y = Math.floor(Math.random() * 42)+1;

var x_fix, y_fix;
var sr_x, sr_y;

var sr_exit_count = Math.floor(Math.random() * 4)+1;
var alt_x = Math.floor(Math.random() * 2)+1;
var alt_y = Math.floor(Math.random() * 2)+1;

var external_rooms = [];
var er_placement = []

function setup() {
    createCanvas(1200,1200);

    if(srp_x % 2 === 0) {
        x_fix = 1;
    }else {
        if(srp_x === 1) {
            x_fix = 0;
        }else {
            x_fix = 2;
        }
    }

    if(srp_y % 2 === 0) {
        y_fix = 1;
    }else {
        if(srp_y === 1) {
            y_fix = 0;
        }else {
            y_fix = 2;
        }
    }

    sr_x = (25*(x_fix+srp_x));
    sr_y = (25*(y_fix+srp_y));

    starting_room = new Sprite(sr_x, sr_y, 25, 25);
    starting_room.color = "red";
    
    console.log(srp_x, srp_y);
    console.log(x_fix, y_fix);
    console.log(sr_x, sr_y);

    for(let i = 0; i<sr_exit_count; i++) {
        external_rooms.push(new Sprite(0,0,25,25));
        er_placement.push(i+1);

        if(er_placement[i] === 1) {
            external_rooms[i].x = starting_room.x;
            if(alt_y === 1) {
                external_rooms[i].y = starting_room.y+25;
            }else {
                external_rooms[i].y = starting_room.y-25;
            }
        }else if(er_placement[i] === 2) {
            if(alt_x === 1){
                external_rooms[i].x = starting_room.x-25;
            }else{
                external_rooms[i].x = starting_room.x+25;
            }
            external_rooms[i].y = starting_room.y;
        }else if(er_placement[i] === 3) {
            external_rooms[i].x = starting_room.x;
            if(alt_y === 1) {
                external_rooms[i].y = starting_room.y-25;
            }else {
                external_rooms[i].y = starting_room.y+25;
            }
        }else if(er_placement[i] === 4) {
            if(alt_x === 1){
                external_rooms[i].x = starting_room.x+25;
            }else{
                external_rooms[i].x = starting_room.x-25;
            }
            external_rooms[i].y = starting_room.y;
        }
    }
}

function draw() {
    background("black");
}
