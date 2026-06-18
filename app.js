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

Object.keys(FLASHCARDS).forEach(cat => {
    const li = document.createElement("li");
    li.textContent = cat;

    li.onclick = () => openCategory(cat);
    categoryList.appendChild(li);
});

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

card.onclick = () => {
    showingFront = !showingFront;
    renderCard();
};

nextBtn.onclick = () => {
    const list = FLASHCARDS[currentCategory];
    currentIndex = (currentIndex + 1) % list.length;
    showingFront = true;
    renderCard();
};

prevBtn.onclick = () => {
    const list = FLASHCARDS[currentCategory];
    currentIndex = (currentIndex - 1 + list.length) % list.length;
    showingFront = true;
    renderCard();
};

backBtn.onclick = () => {
    flashcardView.classList.add("hidden");
    categoriesView.classList.remove("hidden");
};