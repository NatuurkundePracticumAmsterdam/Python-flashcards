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

## Maak een if-elif-else-statement die zegt "You passed!" als je cijfer boven de 5 is, "You barely failed!" als je cijfer een 4 is en "You failed!" als het onder de 4 is.
>grade = 5
if grade > 5:
    print("You passed!")
elif grade == 4:
    print("You barely failed!")
else:
    print("You failed!")


# Herhaling sessie 4

## Tel deze getallen bij elkaar op en print het resultaat.
>a = 3.2
>b = 9.7
result = a + b
print(result)

## Bereken base tot de macht power en print het resultaat.
>base = 3
>power = 5
result = base**power
print(result)

## Print de rest (modulo) als je a door b deelt.
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


