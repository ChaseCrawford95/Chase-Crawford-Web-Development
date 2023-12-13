#!/usr/bin/env python
# Turn on debug mode
import cgitb
import cgi
import pymysql
cgitb.enable()

my_con = pymysql.connect(db='Lab08', user='root', passwd='MyP@ssword1234', host='localhost')
c = my_con.cursor()

form = cgi.FieldStorage()
action = form.getvalue('action')

if action == 'Save':
    name_submit = str(form.getvalue('StudentName'))
    exam1_submit = int(form.getvalue('Exam1'))
    exam2_submit = int(form.getvalue('Exam2'))
    final_submit = int(form.getvalue('Final'))
    average_score = (exam1_submit + exam2_submit + (2 * final_submit)) / 4.0

    Submission = "INSERT INTO student_grades (name, exam1, exam2, final, average) VALUES (%s, %s, %s, %s, %s)"
    data = (name_submit, exam1_submit, exam2_submit, final_submit, average_score)

    try:
        c.execute(Submission, data)
        my_con.commit()
        print("Content-Type: text/html;charset=utf-8")
        print()
        print("Your input has been inserted into the database records.")
    except Exception as e:
        print("Content-Type: text/html;charset=utf-8")
        print()
        print("Error occurred you need to fix something:", e)

elif action == 'Display the records':
    try:
        c.execute("SELECT name, average FROM student_grades")
        data = c.fetchall()
        print("Content-Type: text/html;charset=utf-8")  
        print()  
        print("<h3>Records</h3>")
        print("<table border='1'>")
        print("<tr><th>Full Name</th><th>Average Score</th></tr>")
        for row in data:
            name, average = row
            print(f"<tr><td>{name}</td><td>{average}</td></tr>")
        print("</table>")
    except Exception as e:
        print("Content-Type: text/html;charset=utf-8")
        print()
        print("Error occurred while fetching records:", e)

elif action == 'Delete':
    Profile_to_delete = str(form.getvalue('DeleteProfile'))
    Deletion = "DELETE FROM student_grades WHERE name = %s"

    try:
        c.execute(Deletion, (Profile_to_delete,))
        my_con.commit()
        print("Content-Type: text/html;charset=utf-8")
        print()
        print(f"Profile: '{Profile_to_delete}' has been deleted from the records.")
    except Exception as e:
        print("Content-Type: text/html;charset=utf-8")
        print()
        if 'Profile_to_delete' in locals():
            print("Error occurred while deleting the record: '{Profile_to_delete}'", e)
        else:
            print("Error occurred. Please provide a valid name to delete.")

#Sources
#Creating a connection between this python file and the database was in help from the lecture slides. This is lines 8 to 9.
#How to make the python file detect when any submit button is used was in help from chatgpt. This is lines 11 to 12.
#Knowing how to place data inputs into variables and then setting up these variables to be placed into the database was in help from chatchpt and lecture slides. This is lines 15 to 26.
#Knowing how to get the data from the database and then placing said data into a visible table was in help/inspiration from the lecture slides. Knowing how to target 'specific' data to collect in the data table was in help from chatgpt. This is lines 37 to 47
#Knowing how to delete a data row based off a single reference point (the name of the student) on that row was in help from chatgpt. This is lines 54 to 58.
 
#NOTES
#How I created the data table that is in the database is structured as follows: (name VARCHAR(1000), exam1 INT, exam2 INT, final INT, average INT);