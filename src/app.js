import CoreElement from "./components/core-element";
import "./components/home-component";
import "./components/main-nav-component";
import "./components/footer-component";

class App extends CoreElement {
    constructor() {
        super();
        this.route = '/';
    }

    onConnected() {
        window.addEventListener('hashchange', () => {
            this.update({ route: window.location.hash.replace('#','') });
        });
    }   

    static get template() {
        return `
            <main-nav-component></main-nav-component>
            <home-component #if="this.route === '/'"></home-component>
            <footer-component></footer-component>
        `;
    }
}

window.customElements.define('beer-app', App);