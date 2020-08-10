import CoreElement from "./components/core-element";
import "./components/home-component";
import "./components/nav-component";

class App extends CoreElement {
    constructor() {
        super();
        this.route = '/';
    }

    onConnected() {
        window.addEventListener("hashchange", () => {
            this.update({route: window.location.hash.replace('#','')});
        })
    }   
  
    static get template() {
        return `
            <nav-component></nav-component>
            <home-component #if="this.route === '/'"></home-component>
        `;
    }
}

window.customElements.define('beer-app', App);