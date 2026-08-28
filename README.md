# Python-flashcards
Learn basic Python syntax using flashcards. Especially designed for Medical Natural Sciences.

First, select the desired category in the main menu. The flashcards corresponding to that category will then be shown. The flashcards can then be controlled using the arrowkeys or by using the buttons on screen.

Flip the card by pressing up/down or by using the spacebar. Go to the next card by pressing right and go to the previous card by pressing left. To go back to the main menu press escape.

# Content of the flashcards
The file [cards.md](cards.md) is used to store the content of the flashcards.

Each category is defined using `# [category name]`. Everything that follows until the next `# `, will be part of the same category.

Each card is then defined using `## [text on the front of the card]`. All lines that follow this until the next `## ` will be parsed as content for this flashcard.

If you want to add code to the front of the card please do so by adding lines starting with `>`. Any lines not starting with `>` will be parsed as code to be displayed on the back of the card.

Currently, code on the front of the card will also be displayed in the solution.

## Example

```md
# Category name

## Text on the front of the card
>Code on the front of the card
Code on the back of the card

## Text on the front of the next card
>Code on the front of the next card
Code on the back of the next card


# Next category name
...
```

# How to test
`python -m http.server 8000`

visit http://localhost:8000
