import CoreElement from "./core-element";

export default class MainNavComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
            <nav id="main-nav">
                <a href="/#/"><img id="main-logo" alt="logo-beer"></a>
                <button id="toggle-menu">Menu</button>

                <ul id="main-menu">
                    <li>Recettes</li>
                    <li>Catalogue</li>
                    <li>Guide</li>
                    <li>Connexion</li>
                    <li><a href="/#/administration">Administration</a></li>
                </ul>
            </nav>
        `;
    }
}

window.customElements.define('main-nav-component', MainNavComponent);