import HttpFetch from "../services/httpFetch";

/**
 * importe la feuille de style principale dans tous les composants
 */
export default class CoreElement extends CustomElement {

    static get styles() {
        return [
            '@import url("/node_modules/@fortawesome/fontawesome-free/css/all.min.css");',
            '@import url("/css/main.css");',
        ];
    }

    static get injects() {
        return [HttpFetch];
    }

}
