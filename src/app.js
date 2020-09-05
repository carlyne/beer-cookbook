import CoreElement from "./components/core-element";

const boxstore = require('boxstore');
import "./components/home-component";
import "./components/main-nav-component";
import "./components/footer-component";
import "./components/administration/administration-component";

window.boxstore.set({});
window.boxstore.add('apiHost', 'http://localhost:8088');

class App extends CoreElement {
    constructor() {
        super();
        this.route = '/';
        this.apiRoutes = `/config/routes`;
        this.storeLoaded = false;
    }

    createStore() {
        fetch(this.apiRoutes)
        .then(result => result.json())
        .then(routes => {
            window.boxstore.add('api', routes);
            this.update({storeLoaded: true});
        });
    }

    onConnected() {
        window.addEventListener('hashchange', () => {
            this.update({ route: window.location.hash.replace('#','') });
        });

        this.update({ route: window.location.hash.replace('#','') });
        this.createStore();
    }   

    static get template() {
        return `
            <main-nav-component></main-nav-component>

            <main id="display-pages" #if="this.storeLoaded === true">
                <home-component #if="this.route === '' || this.route === '/'"></home-component>
                <administration-component #if="this.route.startsWith('/administration')"></administration-component>
            </main>
            
            <footer-component></footer-component>
        `;
    }
}

window.customElements.define('beer-app', App);