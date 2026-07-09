const wishes = [
    "🌟 Лапка Сміливості<br><br>Нехай сьогодні тобі вистачить сміливості зробити те, чим ти будеш пишатися!",
    "❤️ Лапка Доброти<br><br>Подаруй комусь усмішку. Добро завжди повертається!",
    "🐾 Лапка Дружби<br><br>Нехай поруч будуть люди, які підтримують тебе.",
    "☀️ Лапка Гарного дня<br><br>Бажаю тобі багато радості та гарного настрою!",
    "⭐ Лапка Успіху<br><br>У тебе все обов'язково вийде!",
    "🌈 Лапка Радості<br><br>Нехай сьогодні буде багато щасливих моментів!",
    "💙 Лапка Впевненості<br><br>Ти набагато сильніший, ніж думаєш.",
    "🐶 Бордо передає привіт!<br><br>Я дуже радий, що ми познайомилися ❤️"
];

let typing = false;

function showWish() {

    if (typing) return;

    typing = true;

    const dog = document.getElementById("bordo");
    const box = document.getElementById("wish");

    // Стрибок Бордо
    dog.classList.add("jump");

    setTimeout(() => {
        dog.classList.remove("jump");
    }, 500);

    // Сердечка
    createHearts();

    // Випадкове побажання
    const text = wishes[Math.floor(Math.random() * wishes.length)];

    box.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        box.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

            typing = false;

        }

    }, 30);

}


// ❤️ Сердечка

function createHearts() {

    for (let i = 0; i < 8; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = (45 + Math.random() * 10) + "vw";
        heart.style.top = (45 + Math.random() * 10) + "vh";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);

    }

}


// 🐾 Лапки

function createPaw() {

    const effects = document.getElementById("effects");

    const paw = document.createElement("span");

    paw.className = "paw";

    paw.textContent = "🐾";

    paw.style.left = Math.random() * 100 + "%";

    paw.style.fontSize = (18 + Math.random() * 16) + "px";

    paw.style.animationDuration = (5 + Math.random() * 3) + "s";

    effects.appendChild(paw);

    paw.addEventListener("animationend", () => paw.remove());

}

setInterval(createPaw, 700);
