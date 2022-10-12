class MealItem extends HTMLElement{
    set meal(meal){
        this._meal = meal;
        this.render();
    }

    render(){
        this.innerHTML = `
        <img class="pic-meal" src="${this._meal.strMealThumb}" alt="Pic Meal">
        <div class="meal-info">
            <h2><b>${this._meal.strMeal}</b></h2>
        </div>
      `;
    }
}

customElements.define('meal-item', MealItem);