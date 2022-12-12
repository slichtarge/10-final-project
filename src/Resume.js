import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
        <div className = "Resume">
            <div id="container">
                <div className="row justify-content-around">
                    <div className = "col-4 d-flex justify-content-left" id = "name">
                        Insert Name Here
                    </div>
                    <div className = "col-4 text-right" id = "details">
                        <p className = "para">Phone: your number </p>
                        <p className = "para">E-mail: your e-mail </p>
                        <p className = "para">Website: your website </p>
                    </div>
                </div>
            </div>

            <div id="newItem">
                <div>
                <label for="newItemEnter">Your Name:</label>
                </div>
                <input type = "text" id="newItemEnter" required></input>
                <button type="submit" id="submitNewItem">update</button>
            </div>

            <div id="newItem">
                <div>
                <label for="newItemEnter">Your Phone #:</label>
                </div>
                <input type = "text" id="newItemEnter" required></input>
                <button type="submit" id="submitNewItem">update</button>
            </div>

            <div id="newItem">
                <div>
                <label for="newItemEnter">Your E-Mail:</label>
                </div>
                <input type = "text" id="newItemEnter" required></input>
                <button type="submit" id="submitNewItem">update</button>
            </div>

            <div id="newItem">
                <div>
                <label for="newItemEnter">Your Website URL:</label>
                </div>
                <input type = "text" id="newItemEnter" required></input>
                <button type="submit" id="submitNewItem">update</button>
            </div>
        </div>
    );
  }
}

export default Resume;
