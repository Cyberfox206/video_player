const progresse = document.getElementById("vprogressbar")
const resetbtn = document.getElementById("resetbtn");
const backbtn = document.getElementById("backbtn");
const skipbtn = document.getElementById("skipbtn");
const video = document.getElementById("videob");

let jojo = true;
progresse.max = video.duration;

video.addEventListener("click", () => {
    if (jojo) {
        video.play()
        jojo = false;
    } else {
        video.pause()
        jojo = true
    }
})

video.addEventListener("timeupdate", () => {
    progresse.value = video.currentTime;
})

backbtn.addEventListener("click", () => {
    video.currentTime -= 10;
})

skipbtn.addEventListener("click", () => {
    video.currentTime += 10;
})

resetbtn.addEventListener("click", () => {
    video.currentTime = 0;
})