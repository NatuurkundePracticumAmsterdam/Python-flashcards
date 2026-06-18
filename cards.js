const FLASHCARDS = {
    Python: [
        {
            front: "How do you define a function?",
            back: `def greet(name):
    return f"Hello {name}"`
        },
        {
            front: "How do you create a list?",
            back: `numbers = [1, 2, 3, 4]`
        },
        {   front: "Class",
            back: `class Turtle:
    def __init__(self, shape):
        # transform turtle into shape

    def forward(self, distance):
        # move turtle by distance

    def left(self, angle):
        # turn turtle counterclockwise
        # by angle in degrees`
        },
        {
            front: "numbers",
            back: `
    def calculate_squares_up_to(max_number):
        squares = []
        for number in range(max_number):
            squares.append(number ** 2)
        return squares

    result = calculate_squares_up_to(5)`
        }
    ],

    MkDocs: [
        {
            front: "How do you create a Python code block?",
            back: `# mkdocs markdown

\`\`\`python
print("Hello MkDocs")
\`\`\`
`
        },
        {
            front: "How do you start MkDocs?",
            back: `mkdocs serve`
        }
    ]
};