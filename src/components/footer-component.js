import CoreElement from "./core-element";

export default class FooterComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
            <footer id="footer">
                <p>Brew Yourslef</p>
                <nav id="share-nav">
                    <ul>
                        <li>Github</li>
                        <li>Twitter</li>
                    </ul>
                </nav>
            </footer>
        `;
    }
}

window.customElements.define('footer-component', FooterComponent);