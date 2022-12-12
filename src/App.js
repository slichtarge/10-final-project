import React, { Component } from 'react';
import './App.css';
import Resume from './Resume';
import Phrases from './Phrases';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <div class="headerstuff">
                <h1 class="center" id="title">A Resume Header</h1>
                <h2 class="center" id="author">By Sara Lichtarge</h2>
            </div>
        </header>

        <div class="top">
          <h3> Your Resume Header:</h3>
        </div>
        <section id = "resumeHeader">
          <Resume />
        </section>
        <section id = "phraseGenerator">
          <Phrases />
        </section>
      </div>
    );
  }
}

export default App;
