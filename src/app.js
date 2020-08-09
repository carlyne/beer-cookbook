import BaseElement from "./components/base-element";

class SubComponent extends BaseElement {
    constructor() {
        super();

        this.foo = 'Truc';
        this.customEvent = (detail) => new CustomEvent('customevent', { composed: true, detail });

        console.log(this.get('obj'));
    }

    onChanges(name, oldV, newV) {
        console.log(name, oldV, newV);
        this.update();
    }

    onClick() {
        this.emit(this.customEvent('Super message'));
    }

    static get observedAttributes() {
        return ['foo'];
    }

    static get template() {
        return `
            <p [innerHTML]="this.foo"></p>
            <button (click)="this.onClick()">CLICK ON ME</button>
        `;
    }
}

class App extends BaseElement {
    constructor() {
        super();

        this.name = 'Jean';
        this.items = [];

        this.set('obj', { foo: 'bar' });
    }

    onConnected() {
        this.update();
    }

    onSubmit(event) {
        const form = event.target;

        this.items.push(form.elements.name.value);
        form.reset();

        this.update();
    }

    guessColor(i) {
        return i.length > 10 ? 'red' : 'blue';
    }

    static get template() {
        return `
            <div>
                <h1>Hello</h1>
                <sub-component [attr.foo]="this.name" (customevent)="console.log($event)"></sub-component>

                <p [innerHTML]="this.name"></p>

                <form (submit.prevent)="this.onSubmit($event)">
                    <input type="text" name="name">
                    <button type="submit">Send</button>
                </form>
            </div>
            
            <ul>
                <li #for="let i of this.items" [style.color]="this.guessColor(i)">
                    <span #if="i.length > 10">CLONG!</span>
                    <span [innerHTML]="i"></span>
                </li>
            </ul>
        `;
    }

    static get styles() {
        return BaseElement.styles.concat([
            'button { color: yellow; }'
        ]);
    }
}

window.customElements.define('beer-app', App);
window.customElements.define('sub-component', SubComponent);