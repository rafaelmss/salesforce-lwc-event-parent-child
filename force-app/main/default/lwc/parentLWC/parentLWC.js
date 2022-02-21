import { LightningElement } from 'lwc';

export default class ParentLWC extends LightningElement {

    strOutput;

    fetchValue( event ) {
        console.log( '[ParentLWC-fetchValue] ' + event.detail );
        this.strOutput = event.detail;
    }

}