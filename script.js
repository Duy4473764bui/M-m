function openLetter(){

const envelope=document.querySelector(".envelope")

envelope.classList.add("open")

setTimeout(()=>{

document.getElementById("intro").style.display="none"
document.getElementById("main").style.display="block"

},600)

}

/* scroll reveal */

const reveals=document.querySelectorAll(".reveal")

function reveal(){

const windowHeight=window.innerHeight

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top

if(top < windowHeight-120){
el.classList.add("active")
}

})

}

window.addEventListener("scroll",reveal)
reveal()

/* hearts */

function createHeart(){

const heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="💖"

heart.style.left=Math.random()*100+"%"

heart.style.fontSize=(20+Math.random()*30)+"px"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},6000)

}

setInterval(createHeart,500)
