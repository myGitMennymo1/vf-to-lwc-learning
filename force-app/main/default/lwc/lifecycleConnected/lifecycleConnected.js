import { LightningElement, track } from 'lwc';

export default class LifecycleConnected extends LightningElement {
    @track status = 'Waiting for connection...';
    @track boxClass = 'slds-box slds-theme_default';

    connectedCallback() {
        console.log('1. connectedCallback: Timer started...');
        
        // Delay for 3 seconds
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(() => {
            this.status = '✅ Data Received after few seconds!';
            this.boxClass = 'slds-box slds-theme_success slds-text-color_inverse';
            console.log('1. connectedCallback: Logic applied.');
        }, 2000);
    }
}