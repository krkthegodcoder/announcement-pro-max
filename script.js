let announcements = JSON.parse(localStorage.getItem("announcements")) || []

function generate(){

let title=document.getElementById("title").value
let message=document.getElementById("message").value
let date=document.getElementById("date").value

let announcement={title,message,date}

announcements.push(announcement)

localStorage.setItem("announcements",JSON.stringify(announcements))

renderBoard()

}

function renderBoard(){

let board=document.getElementById("board")

board.innerHTML=""

announcements.forEach((a,index)=>{

let div=document.createElement("div")

div.className="post"

div.innerHTML=`
<h3>${a.title}</h3>
<p>${a.message}</p>
<small>${a.date}</small>
<br>
<button onclick="deletePost(${index})">Delete</button>
`

board.appendChild(div)

})

}

function deletePost(i){

announcements.splice(i,1)

localStorage.setItem("announcements",JSON.stringify(announcements))

renderBoard()

}

function aiGenerate(){

let topic=document.getElementById("title").value

document.getElementById("message").value=
`Attention everyone. This is an announcement regarding ${topic}. 
Please stay updated and follow the instructions from the administration.`

}

function changeTheme(){

let theme=event.target.value

document.body.className=""

if(theme==="dark")document.body.classList.add("dark")
if(theme==="school")document.body.classList.add("school")
if(theme==="neon")document.body.classList.add("neon")

}

function downloadImage(){

html2canvas(document.querySelector("#announcement")).then(canvas=>{

let link=document.createElement("a")

link.download="announcement.png"

link.href=canvas.toDataURL()

link.click()

})

}

function shareLink(){

navigator.clipboard.writeText(window.location.href)

alert("Link copied!")

}

function changeLanguage(){

let lang=document.getElementById("lang").value

if(lang==="ur"){

document.getElementById("heading").innerText="اعلان نظام"

}else{

document.getElementById("heading").innerText="📢 Final Boss Announcement System"

}

}

function searchAnnouncements(){

let search=document.getElementById("search").value.toLowerCase()

let posts=document.querySelectorAll(".post")

posts.forEach(post=>{

if(post.innerText.toLowerCase().includes(search)){

post.style.display="block"

}else{

post.style.display="none"

}

})

}

/* PARTICLE BACKGROUND */

const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<80;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()

p.x+=p.dx
p.y+=p.dy

})

requestAnimationFrame(animate)

}

animate()

renderBoard()
