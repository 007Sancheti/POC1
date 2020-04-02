import {html, render} from 'https://unpkg.com/lit-html?module';
import '@lion/input/lion-input.js';
import '@lion/input-amount/lion-input-amount.js';
import '@lion/input-date/lion-input-date.js';
import '@lion/textarea/lion-textarea.js';
import '@lion/input-iban/lion-input-iban.js';
import '@lion/checkbox-group/lion-checkbox-group.js';
import '@lion/checkbox-group/lion-checkbox.js';
import '@lion/radio-group/lion-radio-group.js';
import '@lion/radio-group/lion-radio.js';
import '@lion/select-rich/lion-select-rich.js';
import '@lion/select-rich/lion-options.js';
import '@lion/select-rich/lion-option.js';
import '@lion/button/lion-button.js';
import { ajax, AjaxClass } from '@lion/ajax';
const value = "Mayank";
// Define a template function
const myTemplate = () => html`<p>Hello ${value}</p>
<lion-input label="First Name" id="firstName"></lion-input>
<lion-input label="Last Name" id="lastName"></lion-input>
<lion-input-date label="Date of application"></lion-input-date>
<lion-textarea label="Biography" max-rows="4"></lion-textarea>
<lion-input-amount label="Money" currency="USD" .modelValue=${123456.78}></lion-input-amount>
<lion-input-iban label="Iban" name="account"></lion-input-iban>
<lion-checkbox-group
  name="scientists[]"
  label="Favourite scientists"
>
  <lion-checkbox label="Archimedes" .choiceValue=${'Archimedes'}></lion-checkbox>
  <lion-checkbox label="Francis Bacon" .choiceValue=${'Francis Bacon'}></lion-checkbox>
  <lion-checkbox label="Marie Curie" .choiceValue=${'Marie Curie'}></lion-checkbox>
</lion-checkbox-group>
<lion-radio-group name="dinos_1" label="What are your favourite dinosaurs?">
  <lion-radio label="allosaurus" .choiceValue=${'allosaurus'}></lion-radio>
  <lion-radio label="brontosaurus" .choiceValue=${'brontosaurus'}></lion-radio>
  <lion-radio label="diplodocus" .choiceValue=${'diplodocus'}></lion-radio>
</lion-radio-group>
<lion-select-rich name="favoriteColor" label="Favorite color">
  <lion-options slot="input">
    <lion-option .choiceValue=${'red'}>Red</lion-option>
    <lion-option .choiceValue=${'hotpink'} checked>Hotpink</lion-option>
    <lion-option .choiceValue=${'teal'}>Teal</lion-option>
  </lion-options>
</lion-select-rich>
<lion-checkbox label="I blindly accept all terms and conditions" .choiceValue=${'Archimedes'}></lion-checkbox>
<lion-textarea label="Comments" max-rows="4"></lion-textarea>
<lion-button @click="${clickHandler}">Submit</lion-button>
<lion-button>Reset</lion-button>
`;
const clickHandler = {
    // handleEvent method is required.
    handleEvent(e) { 
        let firstName= document.getElementById("firstName").value;
        let lastName= document.getElementById("lastName").value;
        let body={firstName,lastName};
      console.log(body,"body");
      ajax
      .post('http://localhost:3000/posts', body)
      .then(response => {
        console.log(`POST successful: ${response.status} ${response.statusText}`);
      })
      .catch(error => {
        console.log(error);
      });
    },
    // event listener objects can also define zero or more of the event 
    // listener options: capture, passive, and once.
    capture: true,
  };
  ajax.get('./database/db.json').then(response => console.log(response.data));
  
// Render the template with some data
render(myTemplate('lit-html'), document.body);
