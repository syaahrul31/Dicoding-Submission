import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <header>
      <div class="title-header">
        <h1>Welcome to Sifut Resto!</h1>
        <p>Explore & Find Your Favorite Resto</p>
      </div>
    </header>

    <br />

    <div id="content">
      <h1>Explore Restaurant</h1>
      <div class="cards" id="cards"></div>
      <br />
    </div>
      `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#cards');

    try {
      resto.forEach((restaurant) => {
        restoContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
      if (resto.length === 0) {
        restoContainer.innerHTML += `
            <h3><i>Resto not found</i></h3>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Favorite;
