import {html, render} from 'https://unpkg.com/lit-html?module';
import '@lion/input/lion-input.js';
import '@lion/input-amount/lion-input-amount.js';
import '@lion/input-date/lion-input-date.js';
const value = "Mayank";
// Define a template function
const myTemplate = () => html`<p>Hello ${value}</p>
<lion-input label="First Name" id="Name" placeholder="Name"></lion-input>
<p>Last Name</p>
<lion-input label="Last Name" id="Name" placeholder="Name"></lion-input>
<lion-input-date label="Date of application"></lion-input-date>
<button @click=${clickHandler}>Click Me!</button>

`;
const clickHandler = {
    // handleEvent method is required.
    handleEvent(e) { 
        let name= document.getElementById("Name").value;
      console.log(name);
    },
    // event listener objects can also define zero or more of the event 
    // listener options: capture, passive, and once.
    capture: true,
  };

// Render the template with some data
render(myTemplate('lit-html'), document.body);
