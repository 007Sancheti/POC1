import {html, render} from 'https://unpkg.com/lit-html?module';
import '../POC1/node_modules/@lion/input/lion-input.js';

const value = "Mayank";
// Define a template function
const myTemplate = () => html`<p>Hello ${value}</p>
<lion-input name="firstName" placeholder="Name"></lion-input>
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
