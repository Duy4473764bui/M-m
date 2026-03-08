function openLetter(){

document.getElementById("intro").style.display="none";
document.getElementById("main").style.display="block";

}

/* petals */

const canvas=document.getElementById("petals");
const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resize();
window.addEventListener("resize",resize);

let petals=[];

for(let i=0;i<50;i++){

petals.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*4+2,
speedY:Math.random()*1+0.3,
speedX:Math.random()*0.5-0.25

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

petals.forEach(p=>{

p.y+=p.speedY;
p.x+=p.speedX;

if(p.y>canvas.height){

p.y=-10;
p.x=Math.random()*canvas.width;

}

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="#e8a898";
ctx.fill();

});

requestAnimationFrame(draw);

}

draw();
