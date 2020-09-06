import CoreElement from "./core-element";

export default class MainNavComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
            <nav id="main-nav">
                <div class="menu-link-home">
                    <a href="/"><i class="fas fa-flask" id="main-logo"></i> Beer Cookbook</a>
                </div>

                <button id="toggle-menu">Menu</button>

                <ul id="main-menu">
                    <li><a href="/#/administration">Recettes</a></li>
                    <li><a href="/#/administration">Catalogue</a></li>
                    <li><a href="/#/administration">Guide</a></li>
                    <li><a href="/#/administration">Connexion</a></li>
                    <li id="admin-link"><a href="/#/administration"><i class="fas fa-user-cog"></i></a></li>
                </ul>
            </nav>
        `;
    }
}

window.customElements.define('main-nav-component', MainNavComponent);