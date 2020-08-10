import CoreElement from "./components/core-element";

class App extends CoreElement {
    constructor() {
        super();
        this.name = 'Jean';
    }

  
    static get template() {
        return `
            <h1 [innerHTML]="this.name"></h1>
        `;
    }
}

window.customElements.define('beer-app', App);