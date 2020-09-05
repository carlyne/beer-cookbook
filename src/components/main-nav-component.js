import CoreElement from "./core-element";

export default class MainNavComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
            <nav id="main-nav">
                <a href="/"><i class="fas fa-flask" id="main-logo"></i> Beer Cookbook</a>
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