const categoriesView = document.getElementById("categories-view");
const flashcardView = document.getElementById("flashcard-view");

const categoryList = document.getElementById("category-list");
const categoryTitle = document.getElementById("categoryTitle");

const card = document.getElementById("card");
const cardContent = document.getElementById("cardContent");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

const counter = document.getElementById("counter");

let currentCategory = null;
let currentIndex = 0;
let currentCategoryLength = 0;
let showingFront = true;

let FLASHCARDS = {};


/**
 * Parses markdown text for the flash-cards, finds the text and code to be displayed on the
 * front-side and back-side of the flash-cards, and puts them into a per-catagory dictionary.
 *
 * @param   text    Markdown text to be parsed for flash-cards.
 * @returns Dictionary indexed by the category containing lists of dictionaries containing the
 *          text for the front-side stored in the key 'front', code for the front-side stored in
 *          the key 'frontCode', and code for the back-side stored in the key 'back'.
 */
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
        } else if (line.startsWith("## ")) {
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


/**
 * Builds the category list on the webpage according to the keys of the flashcards found from the
 * markdown file. Creates onclick events for each element to open the respective category.
 */
function buildCategoryList() {
    categoryList.innerHTML = "";

    Object.keys(FLASHCARDS).forEach(cat => {

        const li = document.createElement("li");

        li.textContent = cat;
        li.onclick = () => openCategory(cat);

        categoryList.appendChild(li);
    });
}


/**
 * Generate the flash cards and make them visible on the site.
 */
async function loadCards() {
    const response = await fetch("cards.md");
    const text = await response.text();

    FLASHCARDS = parseCards(text);

    buildCategoryList();
}


/**
 * Opens the category according to the button which was clicked.
 *
 * @param   cat     Category to be opened.
 */
function openCategory(cat) {
    currentCategory = cat;
    currentIndex = 0;
    currentCategoryLength = FLASHCARDS[currentCategory].length;
    showingFront = true;

    categoryTitle.textContent = cat;

    categoriesView.classList.add("hidden");
    flashcardView.classList.remove("hidden");

    renderCard();
}


/**
 * Render the current flash card from the current category and index using the previously parsed
 * data in FLASHCARDS.
 */
function renderCard() {
    counter.innerText = currentIndex+1 + "/" + currentCategoryLength

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


/**
 * Flips the current flashcard by rendering the other side.
 */
function flipCard() {
    showingFront = !showingFront;
    renderCard();
}


/**
 * Go to the next card by increasing the index and rendering its front-side.
 */
function nextCard() {
    currentIndex = (currentIndex + 1) % currentCategoryLength;
    showingFront = true;
    renderCard();
}


/**
 * Go to the previous card by increasing the index and rendering its back-side.
 */
function previousCard() {
    currentIndex = (currentIndex - 1 + currentCategoryLength) % currentCategoryLength;
    showingFront = true;
    renderCard();
}


/**
 * Go back to the categories list.
 */
function exitCategory() {
    flashcardView.classList.add("hidden");
    categoriesView.classList.remove("hidden");
}


/**
 * Find which key was pressed in keydown event and change the flashcard accordingly.
 *
 * @param   e       keydown event.
 */
function keyDownHandler(e) {
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
        default:
            break;
    }
}


// add click events to buttons and cards to control the flash cards
card.onclick = () => {flipCard()};
nextBtn.onclick = () => {nextCard()};
prevBtn.onclick = () => {previousCard()};
backBtn.onclick = () => {exitCategory()};

// add event listener to be able to control the flash cards using the arrow keys
document.addEventListener("keydown", keyDownHandler);

// load cards into webpage
loadCards();
