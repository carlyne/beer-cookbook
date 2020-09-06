import CoreElement from "./core-element";

export default class MainNavComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
            <nav id="main-nav" class="navigation-bar">
                <div class="nav-btn menu-link-home">
                    <a href="/"><i class="fas fa-flask" id="main-logo"></i> Beer Cookbook</a>
                </div>

                <button id="toggle-menu">Menu</button>

                <ul id="main-menu">
                    <li class="nav-btn"><a href="/#/administration">Recettes</a></li>
                    <li class="nav-btn"><a href="/#/administration">Catalogue</a></li>
                    <li class="nav-btn"><a href="/#/administration">Guide</a></li>
                    <li class="nav-btn"><a href="/#/administration">Connexion</a></li>
                    <li class="nav-btn" id="admin-link"><a href="/#/administration"><i class="fas fa-user-cog"></i></a></li>
                </ul>
            </nav>
        `;
    }
}

window.customElements.define('main-nav-component', MainNavComponent);