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

## Schrijf een for-loop die het kwadraat van ieder getal print.
>numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
># e.g. "The square of 3 is 9"
for number in numbers:
    square = number**2
    print("The square of", number, "is", square)

## Schrijf een for-loop die de volledige groepsindeling print.
>names = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank"]
>group = [1, 2, 3, 1, 2, 3]
># e.g. "Alice is in group 1"
for i in range(len(names)):
    print(names[i], "is in group", group[i])

## Bereken de dosis van medicijn X. De dosis is 15 mg per kg lichaamsgewicht, met een maximale dosis van 500 mg.
>mass = float(input("Please enter the person's body mass in kg: "))
dose = 15 * mass  # mg
if dose > 500:
    dose = 500  # mg

## Een infuuszak bevat 500 mL vloeistof met medicijn. Via het infuus wordt iedere minuut 15 mL toegediend. Schrijf een while-loop die dit simuleert. Tijdens iedere herhaling wordt geprint hoeveel mL nog in de infuuszak zit, waarna de inhoud verlaagd wordt. Herhaal dit totdat de zak leeg is. 
>contents = 500  # mL
>flow_rate = 15  # mL / min
># e.g. "There is still 500 mL left in the IV bag"
while contents > 0:
    print("There is still", contents, "mL left in the IV bag")
    contents = contents - flow_rate

# Herhaling sessie 7

## Bereken eerst de concentratie in mg/mL en print deze daarna.
>amount = 500  # mg
>volume = 250  # mL
concentration = amount / volume
print(concentration)

## Maak een lijst "times" met de tijdstippen 0, 1, 2, 3 en 4 uur en een lijst "amounts" met 500, 400, 300, 200 en 100 mg.
times = [0, 1, 2, 3, 4]
amounts = [500, 400, 300, 200, 100]

## Vervang de derde waarde in de lijst door 350.
>amounts = [500, 400, 300, 200, 100]
amounts[2] = 350

## Voeg de waarde 300 toe aan de lijst "amounts".
>amounts = [500, 450, 400, 350]
amounts.append(300)

## Schrijf een for-loop die iedere hoeveelheid uit de lijst print.
>amounts = [500, 450, 400, 350]
for amount in amounts:
    print(amount)

## Schrijf een for-loop die voor ieder tijdstip de bijbehorende hoeveelheid print.
>times = [0, 1, 2, 3, 4]
>amounts = [500, 400, 300, 200, 100]
># e.g. "After 2 hours: 300 mg"
for i in range(len(times)):
    print("After", times[i], "hours:", amounts[i], "mg")

## Maak eerst een lege lijst "measurements". Schrijf daarna een for-loop die alle waarden uit "amounts" verdubbeld en aan de lijst "measurements" toevoegt.
>amounts = [500, 400, 300, 200, 100]
measurements = []
for amount in amounts:
    measurement = 2 * amount
    measurements.append(measurement)

## Als "time" gelijk is aan "dose_time", verhoog dan "amount" met 500. Print daarna altijd de waarde van "amount".
>time = 6
>dose_time = 6
>amount = 72
if time == dose_time:
    amount = amount + 500
print(amount)

## Print "Normal" als "amount" tussen 100 en 500 ligt, anders print je "Outside range".
>amount = 350  # mg
if amount >= 100 and amount <= 500:
    print("Normal")
else:
    print("Outside range")

## Simuleer 2 uur. Verhoog "time" telkens met 0.1 uur en trek per stap "decrease_per_step" af van "amount". Print voor elke stap tijd en hoeveelheid.
>time = 0.0  # h
>amount = 500  # mg
>time_step = 0.1  # h
>decrease_per_step = 40  # mg
># e.g. "After 0.0 hours: 500 mg"
while time <= 2:
    print("After", time, "hours:", amount, "mg")
    amount = amount - decrease_per_step
    time = time + time_step
