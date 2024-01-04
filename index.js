let buttons = document.querySelectorAll(".drum");
let audioSrc;
let audio;

for (const button of buttons) {
    button.addEventListener("click", (e)=>{
        buttonAnimation(button.innerHTML);
        switch(button.classList[0]){
            case "w":
                audioSrc = "./sounds/crash.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "a":
                audioSrc = "./sounds/kick-bass.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "s":
                audioSrc = "./sounds/snare.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "d":
                audioSrc = "./sounds/tom-1.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "j":
                audioSrc = "./sounds/tom-2.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "k":
                audioSrc = "./sounds/tom-3.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "l":
                audioSrc = "./sounds/tom-4.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
        }
    })
}  

document.addEventListener("keydown" , (evt)=>{
    buttonAnimation(evt.key);
    switch(evt.key){
        case "w":
                audioSrc = "./sounds/crash.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "a":
                audioSrc = "./sounds/kick-bass.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "s":
                audioSrc = "./sounds/snare.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "d":
                audioSrc = "./sounds/tom-1.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "j":
                audioSrc = "./sounds/tom-2.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "k":
                audioSrc = "./sounds/tom-3.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
            case "l":
                audioSrc = "./sounds/tom-4.mp3"
                audio = new Audio(audioSrc);
                audio.play();
                break;
    }
})
let buttonAnimation = (key)=>{
    let btn = document.querySelector(`.${key}`);
    btn.classList.add("pressed");
    setTimeout(()=>{
        btn.classList.remove("pressed")
    },100)
}

