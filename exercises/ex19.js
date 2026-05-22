function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(num) {
    var message = "";

    for (var i = 0; i < num; i++) {
        message += "ha";
    }

    return message + "!";
});