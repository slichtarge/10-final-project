import React, { Component } from 'react';
import './App.css';
import Resume from './Resume';
import Phrases from './Phrases';
import lookingGood from './lookinggood.jpg';

class App extends Component {
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
          <Resume />
        </section>
        <img src = {lookingGood} alt="good job filler"></img>
        <hr></hr>
        <section id = "phraseGenerator">
          <Phrases />
        </section>
      </div>
    );
  }
}

export default App;
