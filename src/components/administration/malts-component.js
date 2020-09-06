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
           
            <table #if="this.maltsData.length">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>EBC</th>
                        <th>Pays d'origine</th>
                    </tr>
                </thead>

                <tbody>
                    <tr #for="let malt of this.maltsData">
                        <td [innerHtml]="malt.name"></td>
                        <td [innerHtml]="malt.ebc"></td>
                        <td [innerHtml]="malt.originCode"></td>
                    </tr>
                </tbody>
            </table>
        `;
    }
}

window.customElements.define('malts-component', MaltsComponent);

