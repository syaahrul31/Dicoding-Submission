class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector('#searchPainting').value;
    }
    
    render(){
        this.innerHTML = `
        <div id="search-container" class="search-container">
            <input placeholder="search painting" id="searchPainting" type="search">
            <button id="searchButtonPainting" type="submit">Search</button>
        </div>
        `;
        this.querySelector('#searchButtonPainting').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);