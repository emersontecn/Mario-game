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
    piper.style.left = `${piperposition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioposition}px`;


    mario.src ='imagens/game-over.png';

    mario.style.width="70px";

    mario.style.marginLeft="50px";

    clearInterval(loop);

 }

},10);

document.addEventListener("keydown",jump);