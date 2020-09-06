import CoreElement from "./../core-element";

import "./nav-admin-component";
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
            <nav-admin-component></nav-admin-component>

            <section id="admin-pannel">
                <malts-component #if="this.route === '/administration/malts'"></malts-component>
                <houblons-component #if="this.route === '/administration/houblons'"></houblons-component>
                <levures-component #if="this.route === '/administration/levures'"></levures-component>
                <types-bieres-component #if="this.route === '/administration/types-bieres'"></types-bieres-component>
            </section>
        `;
    }
}

window.customElements.define('administration-component', AdministrationComponent);

