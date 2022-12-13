import React, { Component } from 'react';
import './App.css';
import Resume from './Resume';
import Phrases from './Phrases';
import lookingGood from './lookinggood.jpg';

const website_url = "https://shrtlnk.dev/api/v2/link";
const key = "CZ4p7azX3o1lQBOZniUo8ZhDiWL0REv8QjJYHwtDZ2AKf";
const buzzword_url = "https://corporatebs-generator.sameerkumar.website/";

class App extends Component {

  constructor(props){
    super(props);

    // resume methods
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.displayURL = this.displayURL.bind(this);
    this.updateWebsite = this.updateURL.bind(this);

    // // phrases methods
    this.fetchPhrase = this.fetchPhrase.bind(this);
  }


  updateName(){
    let name_var = document.getElementById("newNameEnter").value;
    if(name_var != "" && name_var != null){
      let curr_name = document.getElementById("name").textContent;
      console.log("you wanna update ur name from " + curr_name+ " to "+ name_var);
      document.getElementById("name").textContent = name_var;
      document.getElementById("newNameEnter").value = "";
    }
    else{
      alert("ERROR: There's no name entered.");
    }

  }

  updateEmail(){
    let email_var = document.getElementById("newEmailEnter").value;
    if(email_var != "" && email_var != null){
      let curr_email = document.getElementById("email").textContent;
      console.log("you wanna update ur email from " + curr_email+ " to "+ email_var);
      document.getElementById("email").textContent = email_var;
      document.getElementById("newEmailEnter").value = "";
    }else{
      alert("ERROR: There's no email entered.");
    }
  }

  updatePhone(){
    let phone_var = document.getElementById("newPhoneEnter").value;
    if(phone_var != "" && phone_var != null){
      let curr_phone = document.getElementById("phone").textContent;
      console.log("you wanna update ur phone from " + curr_phone+ " to "+ phone_var);
      document.getElementById("phone").textContent = phone_var;
      document.getElementById("newPhoneEnter").value = "";
    }
    else{
      alert("ERROR: There's no phone number entered.");
    }
  }

  displayURL(URL_var){
    let curr_URL = document.getElementById("URL").textContent;
    console.log("you wanna update ur URL from " + curr_URL+ " to "+ URL_var);
    document.getElementById("URL").textContent = URL_var;
    document.getElementById("newURLEnter").value = "";
  }

  updateURL(){
    let long_url = document.getElementById("newURLEnter").value;
    let self = this;
    var data = {
      url: long_url
    }
    console.log("entered updateURL");
    // 2. Make an AJAX call to the API and save the generated name in a variable.
    var xhttp = new XMLHttpRequest();
    let response = "";

    // 3. Call the displayURL() function from within your onreadystatechange function, and pass in the generated URL.
    xhttp.onreadystatechange = function(){
        if (this.status == 201) {
          response = JSON.parse(this.responseText).shrtlnk;
          console.log("Response: " + response);
          self.displayURL(response);
        }
    };

    xhttp.open("POST", website_url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("api-key",key);
    xhttp.send(JSON.stringify(data));
  }


  fetchPhrase() {
    console.log("entered fetchPhrase");
    // 2. Make an AJAX call to the API and save the generated name in a variable.
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            console.log("good status");
            let phrase = '"'+ JSON.parse(this.responseText).phrase +'"';
            console.log("the phrase to change: "+ document.getElementById("bs-test").innerText)
            console.log("the updated phrase: " + phrase)
            document.getElementById("bs-test").innerText =phrase;
        }
    };

    xhttp.open("GET", buzzword_url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}



  
  render() {
    return (
      <div className="App">
        <div className="headerstuff">
            <h1 className="center" id="title">A Resume Header</h1>
            <h2 className="center" id="author">By Sara Lichtarge</h2>
        </div>

        <div className="top">
          <h3> Your Resume Header:</h3>
        </div>
        <section id = "resumeHeader">
          <Resume 
          updateName = {this.updateName}
          updateEmail = {this.updateEmail}
          updatePhone = {this.updatePhone}
          updateURL = {this.updateURL}
          displayURL = {this.displayURL}
          />
        </section>
        <img src = {lookingGood} alt="good job filler"></img>
        <hr></hr>
        <section id = "phraseGenerator">
          <Phrases 
          fetchPhrase = {this.fetchPhrase}
          />
        </section>
      </div>
    );
  }
}

export default App;
