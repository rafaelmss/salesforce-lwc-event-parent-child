import { LightningElement } from 'lwc';

export default class ChildLWC extends LightningElement {

    strInput;

    handleChange( event ) {
        this.strInput = event.target.value;
        console.log( '[ChildLWC-handleChange]  this.strInput: ' + this.strInput );
    }

    passToParent() {
        console.log( '[ChildLWC-passToParent]  this.strInput: ' + this.strInput );
        var customEvent =  new CustomEvent( 'pass', {detail: this.strInput} );
        this.dispatchEvent( customEvent );
        console.log( '[ChildLWC-passToParent]  customEvent ' + customEvent );
    }

}
