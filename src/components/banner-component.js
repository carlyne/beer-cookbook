import CoreElement from "./core-element";

export default class BannerComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
            <header id="header-banner">
                <h1>Test</h1>
            </header>
        ` ;
    }

    static get styes(){
        return CoreElement.styles.concat([
            'button { color: yellow; }'
        ]);
    }
}

window.customElements.define('banner-component', BannerComponent);