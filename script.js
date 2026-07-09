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

let random=Math.floor(Math.random()*wishes.length);

document.getElementById("wish").innerHTML=wishes[random];

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
