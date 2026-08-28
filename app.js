const categoriesView = document.getElementById("categories-view");
const flashcardView = document.getElementById("flashcard-view");

const categoryList = document.getElementById("category-list");
const categoryTitle = document.getElementById("categoryTitle");

const card = document.getElementById("card");
const cardContent = document.getElementById("cardContent");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

let currentCategory = null;
let currentIndex = 0;
let showingFront = true;

let FLASHCARDS = {};
loadCards();

async function loadCards() {

    const response = await fetch("cards.md");
    const text = await response.text();

    FLASHCARDS = parseCards(text);

    buildCategoryList();
}

function parseCards(text) {

    const cards = {};

    let currentCategory = null;
    let currentQuestionCode = [];
    let currentQuestion = null;
    let currentAnswer = [];

    const lines = text.split("\n");

    function saveCard() {

        if (
            currentCategory &&
            currentQuestion &&
            currentAnswer.length
        ) {
            cards[currentCategory].push({
                front: currentQuestion,
                frontCode: currentQuestionCode.join("\n"),
                back: currentAnswer.join("\n")
            });
        }
    }

    for (const line of lines) {

        if (line.startsWith("# ")) {

            saveCard();

            currentCategory = line.substring(2).trim();

            cards[currentCategory] = [];

            currentQuestionCode = [];
            currentQuestion = null;
            currentAnswer = [];

            continue;
        }

        if (line.startsWith("## ")) {

            saveCard();

            currentQuestion = line.substring(3).trim();

            currentQuestionCode = [];

            currentAnswer = [];

            continue;
        }

        if (currentQuestion) {

            if (line.startsWith(">")) {

                currentQuestionCode.push(line.substring(1));
                currentAnswer.push(line.substring(1));

            } else {

                currentAnswer.push(line);

            }

        }
    }

    saveCard();

    return cards;
}

function buildCategoryList() {

    categoryList.innerHTML = "";

    Object.keys(FLASHCARDS).forEach(cat => {

        const li = document.createElement("li");

        li.textContent = cat;

        li.onclick = () => openCategory(cat);

        categoryList.appendChild(li);
    });
}

function openCategory(cat) {
    currentCategory = cat;
    currentIndex = 0;
    showingFront = true;

    categoryTitle.textContent = cat;

    categoriesView.classList.add("hidden");
    flashcardView.classList.remove("hidden");

    renderCard();
}

function renderCard() {
    const data = FLASHCARDS[currentCategory][currentIndex];

    cardContent.innerHTML = "";

    if (showingFront) {

        if (data.frontCode.length > 0) {

            const pre_front = document.createElement("pre");
            const code_front = document.createElement("code");

            code_front.className = "language-python";
            code_front.textContent = data.frontCode;

            pre_front.appendChild(code_front);
            cardContent.appendChild(pre_front);

            hljs.highlightElement(code_front);

        }

        const h3 = document.createElement("h3");
        h3.textContent = data.front;
        cardContent.appendChild(h3);
        return;
    }

    const pre = document.createElement("pre");
    const code = document.createElement("code");

    code.className = "language-python";
    code.textContent = data.back;

    pre.appendChild(code);
    cardContent.appendChild(pre);

    hljs.highlightElement(code);
}

function flipCard() {
    showingFront = !showingFront;
    renderCard();
}

card.onclick = () => {flipCard()};

function nextCard() {
    const list = FLASHCARDS[currentCategory];
    currentIndex = (currentIndex + 1) % list.length;
    showingFront = true;
    renderCard();
}

function previousCard() {
    const list = FLASHCARDS[currentCategory];
    currentIndex = (currentIndex - 1 + list.length) % list.length;
    showingFront = true;
    renderCard();
}

nextBtn.onclick = () => {nextCard()};

prevBtn.onclick = () => {previousCard()};

backBtn.onclick = () => {
    flashcardView.classList.add("hidden");
    categoriesView.classList.remove("hidden");
};


document.addEventListener("keydown", keyPressHandler);

function keyPressHandler(e) {
    switch (e.key) {
        case "ArrowLeft":
            previousCard();
            break;
        case "ArrowRight":
            nextCard();
            break;
        case "ArrowUp":
            flipCard();
            break;
        case "ArrowDown":
            flipCard();
            break;
    }
}

