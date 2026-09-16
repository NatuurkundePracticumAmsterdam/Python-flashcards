# Herhaling sessie 2

## Print de letter: a
print("a")

## Maak een variabele "name" met als waarde Alice
name = "Alice"

## Print de zin: Hello world!
print("Hello world!")

## Print de variabele "name"
>name = "Bob"
print(name)

## Wat is het type van "name"?
>name = "Alice"
string

## Wat is het type van "age"?
>age = "19"
string

## Print de zin: Hello Alice
>name_1 = "Alice"
>name_2 = "Bob"
print("Hello", name_1)

## Wat is het type van "age"?
>age = 18
integer

## Wat is het type van "greeting"?
>greeting = "Hello Alice!"
string

## Vraag de naam van de gebruiker en sla deze op in de variabele "name"
name = input("What is your name? ")

## Wat is het type van "age"?
>age = input("How old are you? ")
string

## Wat is het type van "age"?
>age = int(input("How old are you? "))
integer

## Maak een if-statement die zegt "Access granted!" als het wachtwoord gelijk is aan "MNW".
>password = input("What is the password? ")
if password == "MNW":
    print("Access granted!")

## Maak een if-else-statement die zegt "You won!" als je score hoger of gelijk is aan 50 en "You lost!" als deze score lager is.
>score = 35
if score >= 50:
    print("You won!")
else:
    print("You lost!")

## Maak een if-statement die zegt "Access denied!" als het wachtwoord niet gelijk is aan "BMC".
>password = input("What is the password? ")
if password != "BMC":
    print("Access denied!")

## Maak een if-elif-else-statement die "Excellent" zegt als je cijfer groter of gelijk is aan een 8, "Sufficient" als je cijfer boven een 5 is en "Insufficient" als het een 5 of lager is.
>grade = 7
if grade >= 8:
    print("Excellent")
elif grade > 5:
    print("Sufficient")
else:
    print("Insufficient")


# Herhaling sessie 4

## Tel eerst deze getallen bij elkaar op en print daarna het resultaat.
>a = 3.2
>b = 9.7
result = a + b
print(result)

## Bereken eerst base tot de macht power en print daarna het resultaat.
>base = 3
>power = 5
result = base**power
print(result)

## Bereken eerst de rest (modulo) als je a door b deelt en print daarna het resultaat.
>a = 7658
>b = 10
result = a % b
print(result)

## Maak een lijst "rainbow" met alle kleuren van de regenboog.
rainbow = ["red", "orange", "yellow", "green", "blue", "purple"]

## Print "Utrecht" uit deze lijst.
>cities = ["Amsterdam", "Rotterdam", "Utrecht", "Haarlem", "Den Haag"]
print(cities[2])

## Voeg "ultra_violet" toe aan de regenboog.
>rainbow = ["red", "orange", "yellow", "green", "blue", "purple"]
rainbow.append("ultra_violet")

## Verander de vierde stad naar "Leiden".
>cities = ["Amsterdam", "Rotterdam", "Utrecht", "Haarlem", "Den Haag"]
cities[3] = "Leiden"

## Schrijf een for-loop die het kwadraat van ieder getal print
>numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
># e.g. "The square of 3 is 9"
for number in numbers:
    square = number**2
    print("The square of", number, "is", square)

## Schrijf een for-loop die de volledige groepsindeling print
>names = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank"]
>group = [1, 2, 3, 1, 2, 3]
># e.g. "Alice is in group 1"
for i in range(len(names)):
    print(names[i], "is in group", group[i])

## Bereken de dosis van medicijn X. De dosis is 15 mg per kg lichaamsgewicht, met een maximale dosis van 500 mg
>mass = float(input("Please enter the person's body mass in kg: "))
dose = 15 * mass  # mg
if dose > 500:
    dose = 500  # mg

## Schrijf een while-loop die intraveneus een medicijn toevoegt tot de infuuszak leeg is, en steeds print hoeveel er nog over is
>contents = 500  # mL
>flow_rate = 15  # mL / min
># e.g. "There is still 500 mL left in the IV bag"
while contents > 0:
    print("There is still", contents, "mL left in the IV bag")
    contents = contents - flow_rate
