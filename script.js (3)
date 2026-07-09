// =======================================
// OM COMPUTERS & AINEX SERVICES
// Version 5
// script.js
// =======================================

// Get Elements

const servicesContainer = document.getElementById("servicesContainer");
const searchInput = document.getElementById("searchInput");

// ============================
// Render Services
// ============================

function renderServices(data){

if(!servicesContainer) return;

servicesContainer.innerHTML="";

data.forEach(service=>{

const card=document.createElement("div");

card.className="service-card";

card.innerHTML=`

<div class="icon">${service.icon}</div>

<h3>${service.name}</h3>

<p>${service.description}</p>

<small><b>Category :</b> ${service.category}</small>

<small><b>Charges :</b> ${service.charges}</small>

<button class="portalBtn">
Open Portal
</button>

`;

card.querySelector(".portalBtn").addEventListener("click",()=>{

if(service.portal=="#"){

alert("Portal Available Soon");

}else{

window.open(service.portal,"_blank");

}

});

servicesContainer.appendChild(card);

});

}

// ============================
// First Load
// ============================

renderServices(services);

// ============================
// Search
// ============================

searchInput.addEventListener("input",()=>{

const value=searchInput.value.toLowerCase();

const filtered=services.filter(item=>{

return(

item.name.toLowerCase().includes(value)

||

item.category.toLowerCase().includes(value)

||

item.description.toLowerCase().includes(value)

);

});

renderServices(filtered);

});

console.log("Version 5 Loaded");
// =======================================
// Category Filter
// =======================================

const categoryButtons=document.querySelectorAll(".hero-buttons button");

categoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

const category=button.innerText.toLowerCase();

const filtered=services.filter(item=>

item.category.toLowerCase().includes(category)

||

item.name.toLowerCase().includes(category)

);

renderServices(filtered);

});

});

// =======================================
// Statistics Counter
// =======================================

const counters=document.querySelectorAll(".stat-card h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const text=counter.innerText;

const target=parseInt(text);

const suffix=text.replace(/[0-9]/g,"");

let current=0;

const speed=Math.max(1,Math.ceil(target/60));

function update(){

current+=speed;

if(current<target){

counter.innerText=current+suffix;

requestAnimationFrame(update);

}else{

counter.innerText=target+suffix;

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// =======================================
// Scroll Animation
// =======================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

function observeCards(){

document.querySelectorAll(

".service-card,.category-card,.popular-card,.stat-card"

).forEach(card=>{

observer.observe(card);

});

}

observeCards();

// Observe Again After Rendering

const oldRender=renderServices;

renderServices=function(data){

oldRender(data);

observeCards();

};

// Reload Cards

renderServices(services);
// =======================================
// Back To Top Button
// =======================================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
bottom:25px;
left:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#0b57d0;
color:#fff;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 10px 20px rgba(0,0,0,.25);
z-index:999;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";
topBtn.style.alignItems="center";
topBtn.style.justifyContent="center";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =======================================
// Floating Buttons
// =======================================

const callBtn=document.querySelector(".floating-call");

if(callBtn){

callBtn.addEventListener("click",e=>{

e.preventDefault();

window.location.href="tel:9236414171";

});

}

const whatsappBtn=document.querySelector(".floating-whatsapp");

if(whatsappBtn){

whatsappBtn.addEventListener("click",e=>{

e.preventDefault();

window.open(

"https://wa.me/919236414171",

"_blank"

);

});

}

// =======================================
// Smooth Navigation
// =======================================

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =======================================
// Console
// =======================================

console.log("✅ OM COMPUTERS & AINEX SERVICES Version 5 Loaded Successfully");
