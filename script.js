/* ==========================================
   OM COMPUTERS & AINEX SERVICES
   Version 2
   script.js
========================================== */

/* ==========================================
   ELEMENTS
========================================== */

const statsBox =
document.getElementById("stats");

const categoryBox =
document.getElementById("categories");

const serviceBox =
document.getElementById("services");

const searchBox =
document.getElementById("searchBox");

const liveTime =
document.getElementById("liveTime");

/* ==========================================
   LIVE DATE & TIME
========================================== */

function updateTime(){

const now=new Date();

liveTime.textContent=

now.toLocaleString(

"en-IN",

{

dateStyle:"medium",

timeStyle:"medium"

}

);

}

updateTime();

setInterval(updateTime,1000);

/* ==========================================
   DASHBOARD STATS
========================================== */

function renderStats(){

statsBox.innerHTML=`

<div class="stat-card fade-in">

<h2>

${categories.length}

</h2>

<p>

Categories

</p>

</div>

<div class="stat-card fade-in">

<h2>

${services.length}

</h2>

<p>

Services

</p>

</div>

<div class="stat-card fade-in">

<h2>

24×7

</h2>

<p>

Support

</p>

</div>

<div class="stat-card fade-in">

<h2>

${APP.phone}

</h2>

<p>

Contact

</p>

</div>

`;

}

/* ==========================================
   CATEGORY CARDS
========================================== */

function renderCategories(){

categoryBox.innerHTML="";

categories.forEach(category=>{

const total=

services.filter(

item=>item.category===category.id

).length;

categoryBox.innerHTML+=`

<div

class="category-card fade-in"

onclick="openCategory(${category.id})">

<div class="category-icon">

${category.icon}

</div>

<h3>

${category.name}

</h3>

<p>

${total} Services

</p>

<button class="btn">

Open

</button>

</div>

`;

});

}

/* ==========================================
   INITIAL LOAD
========================================== */

renderStats();

renderCategories();

/* ==========================================
   Next Part:
   openCategory()
   goHome()
========================================== */
/* ==========================================
   OPEN CATEGORY
========================================== */

function openCategory(categoryId){

const category=

categories.find(

item=>item.id===categoryId

);

if(!category) return;

statsBox.style.display="none";

categoryBox.style.display="none";

serviceBox.style.display="grid";

const list=

services.filter(

item=>item.category===categoryId

);

let html=`

<div class="service-header">

<button

class="back-btn"

onclick="goHome()">

← Home

</button>

<h2>

${category.icon}

${category.name}

</h2>

</div>

`;

if(list.length===0){

html+=`

<div class="no-result">

No Services Found

</div>

`;

}else{

list.forEach(service=>{

html+=`

<div class="service-card fade-in">

<div class="service-icon">

${service.icon}

</div>

<h3>

${service.name}

</h3>

<p>

Official Online Service

</p>

<button

class="btn"

onclick="openPortal('${service.portal}')">

Open Portal

</button>

</div>

`;

});

}

serviceBox.innerHTML=html;

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ==========================================
   HOME
========================================== */

function goHome(){

serviceBox.style.display="none";

statsBox.style.display="grid";

categoryBox.style.display="grid";

serviceBox.innerHTML="";

searchBox.value="";

renderCategories();

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ==========================================
   Next Part:
   Search Engine
   Auto Search
   ESC Clear
   Window Load
========================================== */
/* ==========================================
   SEARCH ENGINE
========================================== */

searchBox.addEventListener(

"input",

function(){

const keyword=

this.value

.toLowerCase()

.trim();

if(keyword===""){

goHome();

return;

}

statsBox.style.display="none";

serviceBox.style.display="none";

categoryBox.style.display="grid";

let html="";

categories.forEach(category=>{

const total=

services.filter(

item=>item.category===category.id

).length;

const matchCategory=

category.name

.toLowerCase()

.includes(keyword);

const matchService=

services.some(

item=>

item.category===category.id &&

item.name

.toLowerCase()

.includes(keyword)

);

if(matchCategory || matchService){

html+=`

<div

class="category-card fade-in"

onclick="openCategory(${category.id})">

<div class="category-icon">

${category.icon}

</div>

<h3>

${category.name}

</h3>

<p>

${total} Services

</p>

<button class="btn">

Open

</button>

</div>

`;

}

});

if(html===""){

categoryBox.innerHTML=`

<div class="no-result">

<h2>

❌ No Result Found

</h2>

<p>

Please try another keyword.

</p>

</div>

`;

}else{

categoryBox.innerHTML=html;

}

}

/* ==========================================
   ESC CLEAR SEARCH
========================================== */

);

searchBox.addEventListener(

"keydown",

function(e){

if(e.key==="Escape"){

this.value="";

goHome();

}

});

/* ==========================================
   PAGE LOAD
========================================== */

window.onload=function(){

renderStats();

renderCategories();

updateTime();

};

/* ==========================================
   END OF script.js
========================================== */
