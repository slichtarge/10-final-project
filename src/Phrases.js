import React, { Component } from 'react';
import './Phrases.css';

class Phrases extends Component {
  render() {
    return (
        <div className = "Phrases">
            <div className = "added-help">
                <h3>Need help beefing up the rest of your resume?</h3>
                <div className = "subhelp">
                    <button type="submit" className="submit_bs" id="bs_button">Click Here</button>
                </div>
            </div>

            <div className = "box">
                <div id="consider-test">Consider Adding:</div>
                <div id="bs-test">"Leveraging Bullshit to Capitalize on Funding"</div>
            </div>
        </div>
    );
  }
}

export default Phrases;
