const mario = document.querySelector(".mario");
const piper = document.querySelector(".piper");

const jump = () => {

    mario.classList.add("jump");

    setTimeout(() => {

        mario.classList.remove("jump");

    },500);

}

const loop = setInterval(() => {

 const piperposition = piper.offsetLeft;
 const marioposition = +window.getComputedStyle(mario).bottom.replace('px','');

 if (piperposition <= 120 &&  piperposition > 0 && marioposition < 80) {

    piper.style.animation = "none";
    piper.style.left = `${piperposition}px`

 }

},10);

document.addEventListener("keydown",jump);