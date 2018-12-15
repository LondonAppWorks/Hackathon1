var sphero = require("sphero"),
    orb = sphero("c8:ca:03:dc:af:51"),
    direction = 0;

orb.connect(function() {
    var moves = true;

    console.log('hello orb');

    orb.detectCollisions();
    orb.streamImuAngles();

    colorize();
    setInterval(function() {
        if (moves) {
            move();
        }
    }, 30);

    orb.on("collision", function() {
        collided();
    });

    function collided() {
        console.log('collided');

        moves = false

        colorize();

        if (direction == 0) {
            direction = 270;
        } else {
            direction = 0;
        }

        moves = true;
    }

    function colorize() {
        orb.randomColor(function(err, data) {
            console.log(err || "Random Color!");
        });
    }

    function move() {
        console.log('move');
        orb.roll(60, direction);
    }

    //var direction = Math.floor(Math.random() * 360);

    /*orb.getPowerState(function(err, data) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("data:");
            console.log("  recVer:", data.recVer);
            console.log("  batteryState:", data.batteryState);
            console.log("  batteryVoltage:", data.batteryVoltage);
            console.log("  chargeCount:", data.chargeCount);
            console.log("  secondsSinceCharge:", data.secondsSinceCharge);
        };
    })*/

/*
    orb.on("collision", function(data) {
        console.log("data:");
        console.log("  x:", data.x);
        console.log("  y:", data.y);
        console.log("  z:", data.z);
        console.log("  axis:", data.axis);
        console.log("  xMagnitud:", data.xMagnitud);
        console.log("  yMagnitud:", data.yMagnitud);
        console.log("  speed:", data.timeStamp);
        console.log("  timeStamp:", data.timeStamp);

        orb.stop();
        orb.randomColor();
    });*/
});
