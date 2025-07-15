function makeSound(instrument){
    if(instrument === 'w'){
        var sound = new Audio("sounds/tom-1.mp3")
        sound.play();
    }
    if(instrument === 'a'){
        var sound = new Audio("sounds/tom-2.mp3")
        sound.play();
    }
    if(instrument === 's'){
        var sound = new Audio("sounds/tom-3.mp3")
        sound.play();
    }
    if(instrument === 'd'){
        var sound = new Audio("sounds/tom-4.mp3")
        sound.play();
    }
    if(instrument === 'j'){
        var sound = new Audio("sounds/snare.mp3")
        sound.play();
    }
    if(instrument === 'k'){
        var sound = new Audio("sounds/crash.mp3")
        sound.play();
    }
    if(instrument === 'l'){
        var sound = new Audio("sounds/kick-bass.mp3")
        sound.play();
    }
    
}
document.addEventListener("keydown", e => {
    makeSound(e.key)
})
document.addEventListener("click", e => {
    makeSound(e.target.classList[0])
})