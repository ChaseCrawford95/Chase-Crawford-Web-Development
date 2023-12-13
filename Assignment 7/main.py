import os
from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask import redirect
from flask import url_for

basedir = os.path.abspath(os.path.dirname(__file__))

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///'+os.path.join(basedir,'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Profile(db.Model):
    __tablename__ = "Profiles"

    email = db.Column(db.Text, primary_key = True)
    password = db.Column(db.Text)
    confirmPassword = db.Column(db.Text)
    firstName = db.Column(db.Text)
    lastName = db.Column(db.Text)

    def __init__(self,email,password,confirmPassword,firstName,lastName):
        self.email=email
        self.password=password
        self.confirmPassword=confirmPassword
        self.firstName=firstName
        self.lastName=lastName

    def __repr__(self):
        return f"Email: {self.email} Password: {self.password} Confirmed Password: {self.confirmPassword} First Name: {self.firstName} Last Name: {self.lastName}"
    
@app.route('/form',methods=['POST'])
def process_form():
   
    email = request.form['Email'] 
    password = request.form['Password']
    confirmPassword = request.form['ConfirmPassword']
    firstName = request.form['FirstName']
    lastName = request.form['LastName']
    new_profile = Profile(email=email, password=password, confirmPassword=confirmPassword, firstName=firstName, lastName=lastName)
    db.session.add(new_profile)
    db.session.commit()
    return jsonify({"message": "Data inserted successfully!"})

@app.route('/')
@app.route('/Home.html')
def home():
    return render_template('Home.html')

@app.route('/Account_Creation.html')
def Account_Creation():
    return render_template('Account_Creation.html')

@app.route('/Sign_In.html')
def sign_in():
    return render_template('Sign_In.html')

@app.route('/Account_Result.html')
def account_result():
    return render_template('Account_Result.html')

@app.route('/SecretPage.html')
def SecretPage():
    return render_template('SecretPage.html')



@app.route('/favicon.ico')
def favicon():
    return '', 404

@app.route('/signingIn', methods=['POST'] )
def signingIn():
    email = request.form['Email']
    password = request.form['Password']
    profile = Profile.query.filter_by(email=email).first()
    if profile and profile.password == password:
        return redirect(url_for('SecretPage'))
    else:
        return "Invalid email or password, please try again. "
    
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
#Sources
#The slides from the lectures helped at the start of the coding process. This would be from lines 1 through 36
#Chatgpt helped me with figuring out how to take the input data and store it into the database that was created. This would be from lines 38 to 49
#Chatgpt and the lecture slides helped me with figuring out how to make a python file create the option to open the other html files. This would be from lines 52 to 76
#Chatgpt helped me in figuring out how to take in inputs (password and email) from the user to make them sign into their specifc profile. This would be from lines 78 to 86
#Lecture slides and Chatgpt helped me with lines 88 to 91 to get the whole application running. 