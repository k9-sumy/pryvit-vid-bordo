const wishes = [

"🌟 Лапка Сміливості<br><br>Нехай сьогодні тобі вистачить сміливості зробити те, чим ти будеш пишатися!",

"❤️ Лапка Доброти<br><br>Подаруй комусь усмішку. Добро завжди повертається!",

"🐾 Лапка Дружби<br><br>Нехай поруч будуть люди, які підтримують тебе.",

"☀️ Лапка Гарного дня<br><br>Бажаю тобі багато радості та гарного настрою!",

"⭐ Лапка Успіху<br><br>У тебе все обов'язково вийде!",

"🌈 Лапка Радості<br><br>Нехай сьогодні буде багато щасливих моментів!",

"💙 Лапка Впевненості<br><br>Ти набагато сильніший, ніж думаєш.",

"🐶 Привіт від Бордо<br><br>Дякую, що завітав до мене! До нових зустрічей!"

];

let typing = false;

function showWish(){

    if(typing) return;

    typing = true;

    const dog = document.getElementById("bordo");
    const box = document.getElementById("wish");

    dog.classList.add("jump");

    setTimeout(()=>{
        dog.classList.remove("jump");
    },500);

    createHearts();

    const text = wishes[Math.floor(Math.random()*wishes.length)];

    box.innerHTML="";

    let i=0;

    const timer = setInterval(()=>{

        box.innerHTML += text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

            typing=false;

        }

    },35);

}

function createHearts(){

    for(let i=0;i<10;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=(window.innerWidth/2-60+Math.random()*120)+"px";

        heart.style.top=(window.innerHeight/2+Math.random()*80)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),2000);

    }

}

function createPaw(){

    const paw=document.createElement("div");

    paw.className="paw";

    paw.innerHTML="🐾";

    paw.style.left=Math.random()*100+"vw";

    paw.style.animationDuration=(4+Math.random()*4)+"s";

    document.body.appendChild(paw);

    setTimeout(()=>paw.remove(),8000);
}
setInterval(createPaw,1200);
