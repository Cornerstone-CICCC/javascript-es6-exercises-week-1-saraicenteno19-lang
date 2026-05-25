var laugh = function(num) {
    var message = "";

    for (var i = 0; i < num; i++) {
        message += "ha";
    }

    return message + "!";
};

console.log(laugh(3));