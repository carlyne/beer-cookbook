import CoreElement from "./core-element";
import './banner-component';

export default class HomeComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
        <banner-component></banner-component>
        ` ;
    }

    
}

window.customElements.define('home-component', HomeComponent);