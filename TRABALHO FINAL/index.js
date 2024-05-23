// Detecting mouse click.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting keypress.
document.addEventListener("keypress", function (event) {
    var key = event.key.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
});

function makeSound(key) {
    switch (key) {
        case "q":
            var leftCrash = new Audio("sounds/leftCrash.mp3");
            leftCrash.play();
            break;
        case "w":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;
        case "e":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "r":
            var kickbass = new Audio("sounds/kickbass.mp3");
            kickbass.play();
            break;
        case "t":
            var tom3 = new Audio("sounds/tom3.mp3");
            tom3.play();
            break;
        case "y":
            var tom2 = new Audio("sounds/tom2.mp3");
            tom2.play();
            break;
        case "u":
            var rightCrash = new Audio("sounds/rightCrash.mp3");
            rightCrash.play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton !== null) {
        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}