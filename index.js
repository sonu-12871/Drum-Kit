var noOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var temp = this.innerHTML;

        makesSound(temp);
        animation(temp);

    });
}
document.addEventListener("keypress",function(event){

    makesSound(event.key);
    animation(event.key);
});

function makesSound(key){

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
    }
}

function animation(currentKey){

    var animationTemp = document.querySelector("."+ currentKey);
    animationTemp.classList.add("pressed");
    setTimeout(function(){
        animationTemp.classList.remove("pressed");
    },100);
}