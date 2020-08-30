import CoreElement from "./core-element";

export default class HomeComponent extends CoreElement {
    constructor() {
        super();
    }

    static get template() {
        return `
            <header id="header">
                <figure>
                    <h1>Beer <br> Cookbook</h1>
                </figure>
            </header>

            <main id="content">
                <section id="section-presentation">

                    <section>
                        <h2>Brassez votre bière <br> comme un expert</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit aut quasi ut doloremque hic quo, porro nam accusamus voluptatem modi ratione vel ab cumque similique inventore iste! Consectetur, amet.</p>
                    </section>

                    <nav id="action-nav">
                        <ul>
                            <li class="btn-link"><a href="">Découvrez ou créez des recettes</a></li>
                            <li class="btn-link"><a href="">Inspirez vous avec notre catalogue</a></li>
                            <li class="btn-link"><a href="">Consultez nos guides de brassage</a></li>
                        </ul>
                    </nav>

                </section>

                <section id="section-recettes">

                    <article class="card">
                        <header class="card-img"></header>
                        <div class="card-content"></div>
                    </article>

                    <article class="card"></article>
                    <article class="card"></article>

                </section>
            </main>
        ` ;
    }

    
}

window.customElements.define('home-component', HomeComponent);