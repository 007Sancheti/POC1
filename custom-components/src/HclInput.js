import {LionInput} from '@lion/input';
import {css} from '@lion/core';

export class HclInput extends LionInput {
static get styles() {
    return [
      css`
      /**********************
       {block} .form-field
          ********************/

         :host {
           display: block;
           border:2px solid Blue;
         }
         :host([disabled]) {
           pointer-events: none;
         }

         :host([disabled]) .form-field__label ::slotted(*),
         :host([disabled]) .form-field__help-text ::slotted(*) {
           color: var(--disabled-text-color, #adadad);
         }

         /***********************
       {block} .input-group
          *********************/

         .input-group__container {
           display: flex;
         }

         .input-group__input {
           flex: 1;
           display: flex;
         }

         /***** {state} :disabled *****/
         :host([disabled]) .input-group ::slotted(slot='input') {
           color: var(--disabled-text-color, #adadad);
         }

         /***********************
       {block} .form-control
          **********************/

         .input-group__container > .input-group__input ::slotted(.form-control) {
           flex: 1 1 auto;
           color:blue;
           margin: 0; /* remove input margin in Safari */
           font-size: 100%; /* normalize default input font-size */
         }
      `,
    ];
  }
connectedCallback() {
    super.connectedCallback();
    this._setupFeature();
  }

  _setupFeature() {
    // being awesome
  }
}
