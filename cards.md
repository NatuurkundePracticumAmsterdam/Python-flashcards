# Herhaling in sessie 2

## Print de letter: a

print("a")

## Maak een variabele name met als waarde Alice

name = "Alice"

## Print de zin: Hello world!

print("Hello world!")

## Print de variabele: name

>name = "Bob"

print(name)

## Wat is de type van "name"?

>name = "Alice"

string

## Wat is de type van "age"?

>age = "19"

string

## Print "Hello Alice".

>name_1 = "Alice"
>name_2 = "Bob"

print("Hello", name_1)

## Wat is de type van "age"?

>age = 18

integer

## Wat is de type van "greeting"?

>greeting = "Hello Alice!"

string

## Vraag de naam van de gebruiker en sla het op in de variabele "name"

name = input("What is your name? ")

## Wat is de type van "age"?

>age = input("How old are you? ")

string

## Wat is de type van "age"?

>age = int(input("How old are you? ))

integer

## Maak een if statement die zegt "Access granted!" als het wachtwoord gelijk is aan "MNW".

>password = input("What is the password? ")

if password == "MNW":
    print("Access granted!")

## Maak een if-else statement die "You won!" print als je score hoger of gelijk is aan 50 en "You lost!" als hij lager is.

>score = 35

if score >= 50:
    print("You won!")
else:
    print("You lost!")

## Maak een if statement die zegt "Access denied!" als het wachtwoord niet gelijk is aan "BMC".

>password = input("What is the password? ")

if password != "BMC":
    print("Access denied!")

## Maak een if-elif-else statement die print "You passed!" als je cijfer boven de 5 is, "You barely failed!" als je cijfer een 4 is en "You failed!" als het onder de 4 is.

>grade = 5

if grade > 5:
    print("You passed!")
elif grade == 4:
    print("You barely failed!")
else:
    print("You failed!")


# Herhaling in sessie 4

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

# print

## Print het woord "Hello!".


print("Hello!")

## Print de zin "xxx xxx".

print("xxx xxx")

## Print de variabele "x".

print(x)

# variabelen

## Maak een variabele "y" met als waarde "xxx".

y = "xxx"

## Print de zin "xx xxx" waarbij "xxx" de waarde van de variabele "y" is.

print("xx ", y)

# input

## Vraag aan de gebruiker "xxx" sla het antwoord op in de variabele "y".

y = input("xxx")

## Gegeven ```y = input("xxx")``` zet het antwoord om in een geheel getal/interger.

y = int(y)

of

y = int(input("xxx"))

## Gegeven ```y = input("xxx")``` zet het antwoord om in een decimaal getal/float.

y = float(y)

of

y = float(input("xxx"))

# rekenen

## Gegeven is ```a = 1 en b = 2``` bereken c is a plus b.

c = a + b

## Gegeven is ```a = 1 en b = 2``` bereken c is a min b.

c = a - b

## Gegeven is ```a = 1 en b = 2``` bereken c is a keer b.

c = a * b

## Gegeven is ```a = 1 en b = 2``` bereken c is a gedeeld door b.

c = a / b

## Gegeven is ```a = 1 en b = 2``` bereken c is a modulo b. (twijfel)

c = a % b

# if en operators

## Gegeven is ```a = 1 en b = 2``` controleer of a gelijk is aan b.

if a == b:

## Gegeven is ```a = 1 en b = 2``` controleer of a groter is dan b.

if a > b:

## Gegeven is ```a = 1 en b = 2``` controleer of a kleiner is dan b.

if a < b:

## Gegeven is ```a = 1 en b = 2``` controleer of a niet gelijk is aan b.

if a != b:

## Gegeven is ```a = 1 en b = 2``` controleer of a groter of gelijk is aan b.

if a >= b:

## Gegeven is ```a = 1 en b = 2``` controleer of a kleiner of gelijk is aan b.

if a <= b:

## Gegeven is ```a = 1 en b = 2``` controleer of a gelijk is aan 1 én of b gelijk is aan 2.

if a == 1 and b == 2:

## Gegeven is ```a = 1 en b = 2``` controleer of a gelijk is aan 1 of dat b gelijk is aan 2.

if a == 1 or b == 2:

# if, elif, else

## Gegeven is ```a = 1 en b = 2``` controleer of a gelijk is aan 1 print dan "a is 1", anders als b gelijk is aan 2 print dan "b is 2" anders print dan "anders".

if a == 1:
    print("a is 1")
elif b == 2:
    print("b is 2")
else:
    print("anders")

# lijsten

## Maak een lijst "y" met de waardes "x", "x", en "x".

y = ["x", "x", "x"]

## Gegeven ```lijst = ["a", "b", "c"]``` print het "x"de element uit de lijst.

print(lijst[x-1])

## Gegeven ```lijst = ["a", "b", "c"]``` voeg de waarde "x" toe aan de lijst.

lijst.append("x")

## Gegeven ```lijst = ["a", "b", "c"]``` maak een variabele "y" met als waarde het "x"de element uit de lijst.

y = lijst[x-1]

## Gegeven ```lijst = ["a", "b", "c"]``` verander het "x"de element uit de lijst in "y".

lijst[x-1] = "y"

## Gegeven ```lijst = ["a", "b", "c"]``` geef het laatste element van de lijst. (twijfel)

lijst[2]

of 

lijst[:-1]

## Gegeven ```lijst = ["a", "b", "c"]``` geef het "x"de tot en met het laatste element van de lijst. (twijfel)

lijst[x-1:]

# Loop
## Gegeven ```lijst = ["a", "b", "c"]``` loop over alle elementen in de lijst.

for element in lijst:

## Loop over de getallen van 0 tot 10 met een variabele "i".

for i in range(10):

## Loop over de getallen van 0 tot en met 10 met een variabele "i".

for i in range(10+1):

of

for i in range(11):

## Loop over de getallen van 2 tot en met 10 met een variabele "i".

for i in range(2,10+1):

of

for i in range(2,11):

## Loop over de getallen van 2 tot en met 10 met een variabele "i" in stappen van 2.

for i in range(2,10+1,2):

of

for i in range(2,11,2):

## Gegeven ```lijst = ["a", "b", "c"]``` geef de lengte van de lijst.

len(lijst)

## Gegeven ```lijst = ["a", "b", "c"]``` loop over de getallen van 0 tot de lengte van de lijst met een variabele "i".

for i in range(len(lijst))

## Gegeven ```lijst = ["a", "b", "c"]``` loop over de positie en de elementen van de lijst. (twijfel)

for positie, element in enumerate(lijst):

# Matplotlib
## importeer pyplot van matplotlib als plt

import matplotlib.pyplot as plt

## Gegeven "x" en "y" plot "x" en "y"

plt.plot(x,y)
plt.show()

## Maak de x-astitel "x"

plt.xlabel("x")

## Maak de y-astitel "y"

plt.ylabel("y")

# Error

## Gegeven ```print("Hello")``` veroorzaak een SyntaxError

print("hello)

of

print("hello"

## Gegeven ```lijst = ["a", "b", "c"]``` loop over de elmenten van de lijst en veroorzaak een SyntaxError

lijst = ["a", "b", "c"]

for letter in lijst
    print(letter)

## Gegeven variabele "y" met als waarde "xxx", print de variabele en veroorzaak een NameError

print(y)
y = "xxx"

of

y = "xxx"
print(Y)

of

y = "xxx"
pint(y)

## Gegeven ```a = 1 en b = "xxx"``` veroorzaak een TypeError

a = 1
b = "xxx"
c = a + b

## Gegeven ```a = ["a", "a", "a"] en b = 3 ``` verzoorzaak een TypeError

a = ["a", "a", "a"]
b = 3

c = a / b

## Gegeven ```a = 1 en b = input("xxx")``` veroorzaak een TypeError

a = 1
b = input("xxx")
c = a + b

## Gegeven ```lijst = ["a", "b", "c"]``` veroorzaak een TypeError

lijst = ["a", "b", "c"]
print(lijst[3.0])

## Gegeven ```lijst = ["a", "b", "c"]``` veroorzaak een IndexError

lijst = ["a", "b", "c"]
print(lijst[3])

of

lijst = ["a", "b", "c"]
print(lijst[-4])

## Gegeven variabele "y" met als waarde "xxx", print de variabele en veroorzaak een IndexError (twijfel)

y = "xxx"
print(y[3])

## Gegeven ```a = 1``` veroorzaak een ZeroDivisionError

a = 1
b = 0
c = a/b

## Gegeven variabele "x" met als waarde "abc" en variabele "y" met als waarde "def" combineer de waardes en veroorzaak een AttributeError

x = "abc"
y = "def"
x.append(y)

## Gegeven ```a = 1``` veroorzaak een AttributeError

a = 1
print(len(a))

## Gegeven ```import matplotlib.pyplot as plt``` veroorzaak een AttributeError

import matplotlib.pyplot as plt

plt.pyplot()

## Gegeven dat je xxx wil importeren veroorzaak een ImportError

import xx

## Gegeven ```a = 1``` en ```if a > 0:``` print "a is groter dan nul" en veroorzaak een IndentationError

a = 1
if a > 0:
print("a is groter dan 0")

## Gegeven ```for i in rang(3)```, print "i" en print "next" en veroorzaak een IndentationError

for i in range(3):
    print(i)
        print("next")

of

for i in range(3):
print(i)
    print("next")

of

for i in range(3):
        print(i)
    print("next")

# Keyboard shortcuts
## Wat is de shortcut om een uitvoer in de terminal te stoppen?

Ctrl + c

## Wat is de shortcut om meerdere regels code in te springen?

selecteer + tab

## Wat is de shortcut om meerdere regels code terug in te springen?

selecteer + shift + tab

## Wat is de shortcut in Visual Studio Code om een variabele naam op alle plekken aan te passen?

selecteer + F2

## Wat is de shortcut in Visual Studio Code om een regel(s) code omhoog te plaatsen?

selecteer + Alt + pijltje-omhoog

## Wat is de shortcut in Visual Studio Code om een regel(s) code omlaag te plaatsen?

selecteer + Alt + pijltje-omlaag

## Wat is de shortcut in Visual Studio Code om de cursor terug te plaatsen naar de vorige locatie?

Alt + pijltje-links

## Wat is de shortcut in Visual Studio Code om een cursor toe te voegen?

Alt + linkermuis-klik

## Wat is de shortcut in Visual Studio Code om een cursor toe te voegen aan de volgende plek waar de selectie voorkomt?

selecteer + Ctrl + d