// example of controlled input in LWC :
/* one-way data flow + event to update / two-way data binding */

import { LightningElement } from 'lwc';
// import { track } from 'lwc';

export default class Binding extends LightningElement {
    /* All fields you declare directly in the class are reactive, for example:
 by defaultcourseName = 'Default';
→ reactive automatically — no decorator needed */
    courseName = 'Default';

    handleChange(event) {
        //receives the event object automatically when onchange fires
        /*  When you change its value - LWC detects the change
       and the component automatically re-renders */
        this.courseName = event.target.value;
    }

    //////////// ================

    student = {
        address: {
            city: 'New York'
        }
    };
    // NOT the Recommended Way    
    changeCity1() {
        this.student.address.city = 'Boston';
    }

    //Recommended Way
    changeCity() {
        this.student = {
            ...this.student,
            address: {
                ...this.student.address,
                city: 'Boston'
            }
        };
    }
}

/* 
When Is @track Still Needed Today? // Almost never.
Only in: 
Very old orgs with legacy behavior , Edge debugging situations , Rare proxy edge cases

Salesforce officially recommends using immutable patterns instead.

### Senior Dev Rule - If you're changing:
Primitive → direct assignment is fine
Object property → reassign whole object
Array → use spread operator 
*/
