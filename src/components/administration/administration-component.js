import CoreElement from "./../core-element";

import "./malts-component";
import "./houblons-component";
import "./levures-component";
import "./types-bieres-component";

export default class AdministrationComponent extends CoreElement {
    constructor() {
        super();
        this.route = '/administration';
    }

    onConnected() {
        window.addEventListener('hashchange', () => {
            this.update({ route: window.location.hash.replace('#','') });
        });

        this.update({ route: window.location.hash.replace('#','') });
    }   

    static get template() {
        return `
            <h1>Administration</h1>

            <ul>
                <li><a href="/#/administration/malts">Malts</a></li>
                <li><a href="/#/administration/houblons">Houblons</a></li>
                <li><a href="/#/administration/levures">Levures</a></li>
                <li><a href="/#/administration/types-bieres">Types de bières</a></li>
            </ul>

            <div>
                <malts-component #if="this.route === '/administration/malts'"></malts-component>
                <houblons-component #if="this.route === '/administration/houblons'"></houblons-component>
                <levures-component #if="this.route === '/administration/levures'"></levures-component>
                <types-bieres-component #if="this.route === '/administration/types-bieres'"></types-bieres-component>
            </div>
        `;
    }
}

window.customElements.define('administration-component', AdministrationComponent);

