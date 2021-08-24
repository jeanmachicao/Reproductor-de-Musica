const imagen = document.getElementById("image")
const play = document.getElementById("play")
const pause = document.getElementById("pause")
const replay = document.getElementById("stop")
const audio = document.getElementById("audio")

play.addEventListener('click',()=>{
    audio.play();
    imagen.style.animationPlayState = "running"
})

pause.addEventListener('click',()=>{
    audio.pause();
    imagen.style.animationPlayState = "paused"
})

replay.addEventListener('click',()=>{
    audio.load();
    imagen.style.animationPlayState = "paused"
})