import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
        <div className = "Resume">
            <div className = "wrap"> 
                <div className = "flex-parent-element">
                    <div className="flex-child-element" id = "name">
                        Insert Name Here
                    </div>
                    <div className="flex-child-element" id="details">
                        <p className = "para">Phone: your number </p>
                        <p className = "para">E-mail: your e-mail </p>
                        <p className = "para">Website: your website </p>
                    </div>
                </div>
            </div>

            <div className="newItem" id="newName">
                <div>
                <label for="newItemEnter">Your Name:</label>
                </div>
                <input type = "text" id="newItemEnter" required></input>
                <button type="submit" id="submitNewItem">update</button>
            </div>

            <div className="newItem">
                <div>
                <label for="newItemEnter">Your Phone #:</label>
                </div>
                <input type = "text" id="newItemEnter" required></input>
                <button type="submit" id="submitNewItem">update</button>
            </div>

            <div className="newItem">
                <div>
                <label for="newItemEnter">Your E-Mail:</label>
                </div>
                <input type = "text" id="newItemEnter" required></input>
                <button type="submit" id="submitNewItem">update</button>
            </div>

            <div className="newItem" id ="newURL">
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
