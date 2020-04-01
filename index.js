import {html, render} from 'https://unpkg.com/lit-html?module';

// Define a template function
const myTemplate = (name) => html`<p>Hello ${name}</p>`;

// Render the template with some data
render(myTemplate('lit-html'), document.body);
