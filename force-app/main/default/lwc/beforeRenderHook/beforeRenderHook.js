import { LightningElement } from 'lwc';

export default class BeforeRenderHook extends LightningElement {
    foods;
    courses1;

    /* 
`connectedCallback()` is one of the most important **lifecycle hooks** as it is the component’s "Grand Opening" ceremony.
 It is invoked automatically when an element is first inserted into the document object model (DOM).
### What is it exactly?
* **Timing:** It fires after the component is initialized (after the `constructor`) but *before* the component is rendered on the screen.
* **Scope:** It flows from **parent to child**. The parent’s `connectedCallback` fires first, followed by its children.
### What is it used for?
Since the component is "connected" to the page at this stage, it’s the primary place to perform setup tasks that require access to the environment. 
### Common use cases include:
* **Fetching Data:** Calling Apex methods or wire services to get data as soon as the component loads.
* **Establishing Communication:** Subscribing to a **Lightning Message Channel (LMS)** or the PubSub module.
* **Setting State:** Initializing variables or manipulating data passed down from a parent via `@api` properties.
* **Interaction with the Environment:** Accessing the current URL parameters or checking user permissions.
 */
    connectedCallback() {
        this.foods = ['Pizza', 'Orange', 'Pasta'];
    }

    //  As Keys should represent identity, not display value ,
    // Instead of using primitive strings, model the data as objects with stable IDs :
    courses1 = [
        { id: 'c1', name: 'Irrigation Systems' },
        { id: 'c2', name: 'Soils' },
        { id: 'c3', name: 'Example Course' },
        { id: 'c4', name: 'Organic Crops' }
    ];

    //     | Initialization Type           | When It Runs        | Use Case             |
    // | ----------------------------- | ------------------- | -------------------- |
    // | Class field (`courses1 = []`) | During construction | Static/default state |
    // | `connectedCallback()`         | After DOM insertion | Setup logic          |
    // | `renderedCallback()`          | After render        | DOM manipulation     |

    //  why real ID matter:
    handleShuffle() {
        // Create a shallow copy (immutability is important)
        const shuffled = [...this.courses1];

        // Fisher–Yates shuffle
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        // Assign new reference to trigger reactivity
        this.courses1 = shuffled;
    }
}
