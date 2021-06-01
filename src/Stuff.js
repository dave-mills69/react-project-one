import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Starters</h2>
        <p>All Starters are $5.00 each! <br></br><br></br>Starters we have in stock are:</p>
        <ol>
          <li>Cucumbers</li>
          <img src="images/cucumber 1.jpg"></img>
          <img src="images/cucumber 2.jpg"></img>
          <li>Tomatoes</li>
          <img src="images/tomatoes 1.jpg"></img>
          <img src="images/tomatoes 2.jpg"></img>
          <li>Squash (zucchini)</li>
          <img src="images/squash 1.jpg"></img>
          <img src="images/squash 2.jpg"></img>
          <li>Green Beans</li>
          <img src="images/green bean 1.jpg"></img>
          <img src="images/green bean 2.jpg"></img>
          <li>Cherry Tomatoes</li>
          <img src="images/cherry 1.jpg"></img>
          <img src="images/cherry 2.jpg"></img>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;