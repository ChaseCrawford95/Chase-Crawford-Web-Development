import requests;
import json;

url = "https://michaelgathara.com/api/python-challenge"

response = requests.get(url)

challenges = response.json()
print(challenges)



print()
print()

equations = []
answers = []

for x in challenges:
    equation = x['problem'][:-1]
    equations.append(equation)
    first_number = int(equation.split()[0])
    operator = equation.split()[1]
    second_number = int(equation.split()[2])
    if operator == "+":
        answer = first_number + second_number
        answers.append(answer)
    if operator == "-":
        answer = first_number - second_number
        answers.append(answer)
    if operator == "*":
        answer = first_number * second_number
        answers.append(answer)
    if operator == "/":
        answer = first_number / second_number
        answers.append(answer)

print("Here are the equations listed in the seperate dictionaries. These dictionaires were the ones listed in the array given from the website. Answers will be provided for each equation.")
print()
print("Chase Crawford, cchase95")
print()
for i in range(len(equations)):
    equation = equations[i]
    answer = answers[i]
    print("Equation: ",equation)
    print("Answer: ", answer)
    print()

#Sources:
#I utlized a bit of chatGPT to dust off the cobwebs with getting back into using Python.
#I do miss the built in slicing functions on data structures that Python uses. SUPER convenient. I see why data engineers love these types of languages.

        


