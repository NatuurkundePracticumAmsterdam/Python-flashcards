# print
## Print het woord "xxx".

print("xxx")

## Print de zin "xxx xxx".

print("xxx xxx")

## Print de variabele "x".

print(x)

# variabelen
## Maak een variabele "y" met als waarde "xxx".

y = "xxx"

## Print de zin "xxx xxx" waarbij "xxx" de waarde van de variabele "y" is.

print("xxx ", y)

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
