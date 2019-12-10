"use strict"

const headerHolder = document.querySelector('div#header-holder');
const cloudBG = document.querySelector('div.cloud-bg');

let mouseX = 0;
let mouseY = 0;

let cloudX = 0;
let cloudY = 0;

let speed = 0.02;

function animate(){
    let dX = -mouseX - cloudX;
    let dY = -mouseY - cloudY;

    cloudX += dX * speed;
    cloudY += dY * speed;

    cloudBG.style.backgroundPosition = (cloudX/10)-100 + "px " + (cloudY/10)+50 + "px";
    requestAnimationFrame(animate);
}

animate();

headerHolder.addEventListener('mousemove', function(e){
    mouseX = e.pageX-(screen.width/2);
    mouseY = e.pageY-(screen.height/2);
});