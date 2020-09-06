import CoreElement from "./../core-element";

export default class NavAdminComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
            <nav id="nav-admin" class="navigation-bar navigation-col">
                <ul id="nav-admin-menu">
                    <li class="nav-btn"><a href="/#/administration/malts">Malts</a></li>
                    <li class="nav-btn"><a href="/#/administration/houblons">Houblons</a></li>
                    <li class="nav-btn"><a href="/#/administration/levures">Levures</a></li>
                    <li class="nav-btn"><a href="/#/administration/types-bieres">Types de bières</a></li>
                </ul>
            </nav>
        `;
    }
}

window.customElements.define('nav-admin-component', NavAdminComponent);

