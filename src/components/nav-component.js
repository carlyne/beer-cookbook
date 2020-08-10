import CoreElement from "./core-element";

export default class NavComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Recettes</a></li>
                    <li><a>Craft guide</a></li>
                    <li><a>Catalogue</a></li>
                    <li><a>Se connecter</a></li>
                </ul>
            </nav>
        `;
    }
}

window.customElements.define('nav-component', NavComponent);