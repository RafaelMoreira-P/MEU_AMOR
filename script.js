let coracaoPulsando = false
let escalaCoracao = 1
let direcaoPulso = 1

let slides = document.querySelectorAll(".slide")
let current = 0

function start(){

let music = document.getElementById("music")

music.volume = 0.05
music.play()

setInterval(()=>{
if(music.volume < 0.2){
music.volume += 0.01
}
},500)

nextSlide()

}

function nextSlide(){

if(current < slides.length - 1){

slides[current].classList.remove("active")

current++

slides[current].classList.add("active")

}

}

const canvas = document.getElementById("stars")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let stars=[]

for(let i=0;i<300;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speedX:(Math.random()-0.5)*0.4,
speedY:(Math.random()-0.5)*0.4

})

}

function animate( ){

  

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(star=>{

ctx.beginPath()
ctx.arc(star.x,star.y,star.size,0,Math.PI*2)
ctx.fill()

star.x+=star.speedX
star.y+=star.speedY

if(star.x<0 || star.x>canvas.width){
star.speedX*=-1
}

if(star.y<0 || star.y>canvas.height){
star.speedY*=-1
}

})

requestAnimationFrame(animate)

}

animate()

function formarCoracao(){

let centerX = canvas.width / 2
let centerY = canvas.height / 2
coracaoPulsando = true

stars.forEach((star, i)=>{

let t = i * 0.1

let x = 16 * Math.pow(Math.sin(t),3)
let y = -(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t))

star.x = centerX + x * 20
star.y = centerY + y * 20

star.speedX = 0
star.speedY = 0

})

}

function viajar(){

document.body.classList.add("warp")

setTimeout(()=>{

document.getElementById("convite").style.display="block"

},2000)

}

function resposta(resp){

if(resp === "Sim"){

formarCoracao()

setTimeout(()=>{

let numero="5531981207528"

let mensagem="Minha resposta é: "+resp

let link="https://wa.me/"+numero+"?text="+encodeURIComponent(mensagem)

window.open(link)

},2000)

}

if(resp === "Não"){

let numero="5531981207528"

let mensagem="Minha resposta é: "+resp

let link="https://wa.me/"+numero+"?text="+encodeURIComponent(mensagem)

window.open(link)

}

}

const colorSelect = document.getElementById("colors");
const heart = document.querySelector(".heart");

let heartWhite = false;

colorSelect.addEventListener("change", (e) => {
  const color = e.target.value;

  
  document.documentElement.style.setProperty("--main-color", color);

  
  heartWhite = !heartWhite;

  if(heartWhite){
    heart.style.background = "#fff";
    heart.style.boxShadow = "0 0 25px #fff";
    heart.querySelectorAll("::before, ::after"); 
  } else {
    heart.style.background = color;
    heart.style.boxShadow = `0 0 25px ${color}`;
  }
});



window.onload = function(){

let btnNao = document.getElementById("btnNao")

btnNao.addEventListener("mouseover", function(){

let largura = window.innerWidth - 100
let altura = window.innerHeight - 50

let x = Math.random() * largura
let y = Math.random() * altura

btnNao.style.position = "absolute"
btnNao.style.left = x + "px"
btnNao.style.top = y + "px"

})

}

const dataInicio = new Date("2025-03-02") 

function atualizarContador(){

let agora = new Date()

let diff = agora - dataInicio

let dias = Math.floor(diff / (1000*60*60*24))
let horas = Math.floor((diff / (1000*60*60)) % 24)
let minutos = Math.floor((diff / (1000*60)) % 60)

let texto = dias + " dias, " + horas + " horas e " + minutos + " minutos"

let contador = document.getElementById("contador")

if(contador){
contador.innerText = texto
}

}

setInterval(atualizarContador,1000)

let mouse = {
x: null,
y: null
}

window.addEventListener("mousemove", function(event){

mouse.x = event.x
mouse.y = event.y

})

