const wishes = [

"🐾 Я пишаюся тобою!",

"💙 Нехай сьогодні буде чудовий день!",

"🌈 Усміхнись! Світ стає кращим від твоєї усмішки.",

"⭐ Ти справжній молодець!",

"❤️ Я дарую тобі лапку щастя!",

"🐶 Не забувай мріяти!",

"☀️ Нехай поруч будуть добрі люди!",

"🦴 Будь сміливим!",

"💛 У тебе все вийде!",

"🐾 До нових зустрічей!"

];

function showWish(){

const speech=document.getElementById("speech");

const wish=document.getElementById("wish");

speech.style.display="block";

const random=Math.floor(Math.random()*wishes.length);

const text=wishes[random];

wish.innerHTML="";

let i=0;

const typing=setInterval(()=>{

wish.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},40);

}{

let random=Math.floor(Math.random()*wishes.length);

const box=document.getElementById("wish");

box.classList.remove("fade");

void box.offsetWidth;

box.classList.add("fade");

box.innerHTML=wishes[random];

}
function createPaw(){

const paw=document.createElement("div");

paw.innerHTML="🐾";

paw.className="paw";

paw.style.left=Math.random()*100+"vw";

paw.style.animationDuration=3+Math.random()*3+"s";

document.getElementById("paw-container").appendChild(paw);

setTimeout(()=>{

paw.remove();

},6000);

}
setInterval(createPaw,1200);
