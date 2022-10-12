class AppBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="head-tittle">
            <h2>NyeMeal</h2>
            <p>Makes you sMeal</p>
        </div>
        `;
    }
}

customElements.define('app-bar', AppBar);