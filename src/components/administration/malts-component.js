import CoreElement from "./../core-element";

export default class MaltsComponent extends CoreElement {
    constructor() {
        super();
        this.maltsData = [];
        this.fetch = this.get('HttpFetch');
    }
    
    onConnected() {
        this.fetch.get(window.boxstore.get('apiHost') + window.boxstore.get('api.malts'))
            .then(data => this.update({ maltsData: data}));
    }

    static get template() {
        return `
            <h1>malt</h1>
            <ul #if="this.maltsData.length">
               <li #for="let malt of this.maltsData" [innerHtml]="malt.name"></li> 
            </ul>
        `;
    }
}

window.customElements.define('malts-component', MaltsComponent);

