import { LightningElement } from 'lwc';

export default class AfterRenderHook extends LightningElement {
    courses = [];
    rendered = false;

    renderedCallback() {
        if (!this.rendered) {
            this.courses = ['Irrigation Systems', 'Soils', 'Organic Crops'];
            this.rendered = true;
        }
    }
}
/* renderedCallback ==> after UI finished rendering. 
Only place to manually manipulate DOM elements (use with caution).
Use renderedCallback when you need to interact with the UI (the HTML) 
after it exists. for example: You cannot "focus" an element in connectedCallback 
because the element doesn't exist in the browser yet! */