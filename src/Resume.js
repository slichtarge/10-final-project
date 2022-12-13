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
                        <p className = "para" id = "phone">Phone: your number </p>
                        <p className = "para" id = "email">E-mail: your e-mail </p>
                        <p className = "para" id = "URL">Website: your website </p>
                    </div>
                </div>
            </div>

            <div className="newItem" id="newName">
                <div>
                <label for="newNameEnter">Your Name:</label>
                </div>
                <input type = "text" id="newNameEnter" required></input>
                <button type="submit" id="submitNewItem" onClick={() => this.props.updateName()}>update</button>
            </div>

            <div className="newItem" id ="newPhone">
                <div>
                <label for="newPhoneEnter">Your Phone #:</label>
                </div>
                <input type = "text" id="newPhoneEnter" required></input>
                <button type="submit" id="submitNewItem" onClick={() => this.props.updatePhone()}>update</button>
            </div>

            <div className="newItem">
                <div>
                <label for="newEmailEnter">Your E-Mail:</label>
                </div>
                <input type = "text" id="newEmailEnter" required></input>
                <button type="submit" id="submitNewItem"onClick={() => this.props.updateEmail()}>update</button>
            </div>

            <div className="newItem" id ="newURL">
                <div>
                <label for="newURLEnter">Your Website URL:</label>
                </div>
                <input type = "text" id="newURLEnter" required></input>
                <button type="submit" id="submitNewItem"  onClick={() => this.props.updateURL()}>update</button>
            </div>
        </div>
    );
  }
}

export default Resume;
