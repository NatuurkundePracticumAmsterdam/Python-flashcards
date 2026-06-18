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

Object.keys(FLASHCARDS).forEach(category => {
    const li = document.createElement("li");

    li.textContent = category;

    li.onclick = () => openCategory(category);

    categoryList.appendChild(li);
});

function openCategory(category) {

    currentCategory = category;
    currentIndex = 0;
    showingFront = true;

    categoryTitle.textContent = category;

    categoriesView.classList.add("hidden");
    flashcardView.classList.remove("hidden");

    renderCard();
}

function renderCard() {

    const flashcard =
        FLASHCARDS[currentCategory][currentIndex];

    if (showingFront) {

        cardContent.innerHTML =
            `<h3>${flashcard.front}</h3>`;

    } else {

        cardContent.innerHTML = `
<pre><code class="language-python">${escapeHtml(
flashcard.back
)}</code></pre>
`;

        hljs.highlightAll();
    }
}

card.addEventListener("click", () => {
    showingFront = !showingFront;
    renderCard();
});

nextBtn.addEventListener("click", () => {

    const cards = FLASHCARDS[currentCategory];

    currentIndex =
        (currentIndex + 1) % cards.length;

    showingFront = true;

    renderCard();
});

prevBtn.addEventListener("click", () => {

    const cards = FLASHCARDS[currentCategory];

    currentIndex =
        (currentIndex - 1 + cards.length)
        % cards.length;

    showingFront = true;

    renderCard();
});

backBtn.addEventListener("click", () => {

    flashcardView.classList.add("hidden");
    categoriesView.classList.remove("hidden");
});

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}