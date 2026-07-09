const wishes = [
`🌟 Лапка Сміливості

Нехай сьогодні тобі вистачить сміливості зробити те, чим ти будеш пишатися!`,

`❤️ Лапка Доброти

Подаруй комусь усмішку.

Добро завжди повертається!`,

`🐾 Лапка Дружби

Нехай поруч будуть люди, які підтримують тебе.`,

`☀️ Лапка Гарного дня

Бажаю тобі багато радості та гарного настрою!`,

`⭐ Лапка Успіху

У тебе все обов'язково вийде!`
];

let typing = false;

function showWish() {

    if (typing) return;

    typing = true;

    const dog = document.getElementById("bordo");
    const box = document.getElementById("wish");

    dog.classList.add("jump");

    setTimeout(() => {
        dog.classList.remove("jump");
    }, 500);

    createHearts();

    const text = wishes[Math.floor(Math.random() * wishes.length)];

    const letters = [...text];

    let index = 0;

    box.textContent = "";

    const timer = setInterval(() => {

        box.textContent += letters[index];

        index++;

        if (index >= letters.length) {
            clearInterval(timer);
            typing = false;
        }

    }, 35);

}

// ❤️ Сердечка

function createHearts() {

    for (let i = 0; i < 8; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.textContent = "❤️";

        heart.style.left = (45 + Math.random() * 10) + "vw";
        heart.style.top = (45 + Math.random() * 10) + "vh";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);

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
