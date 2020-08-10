/**
 * importe la feuille de style principale dans tous les composants
 */
export default class CoreElement extends CustomElement {

    static get styles() {
        return [
            '@import url("/css/main.css");',
        ];
    }

}
