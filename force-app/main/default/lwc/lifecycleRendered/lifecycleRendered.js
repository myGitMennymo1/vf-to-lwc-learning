import { LightningElement } from 'lwc';

export default class LifecycleRendered extends LightningElement {
    hasModifiedDOM = false;

    renderedCallback() {
        if (this.hasModifiedDOM) return; // Prevent loop

        console.log('2. renderedCallback: UI is visible. Waiting 6 seconds to touch DOM...');

        // Delay for 6 seconds
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(() => {
            const textElement = this.refs.magicText;
            if (textElement) {
                textElement.style.color = 'orange';
                textElement.style.fontSize = '2rem';
                textElement.innerText = '⚠️ I AM MODIFIED DOM!';
                console.log('2. renderedCallback: DOM manually changed.');
            }
            this.hasModifiedDOM = true;
        }, 4000);
    }
}