import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <header>
      <div class="title-header">
        <h1 tabindex="0">Welcome to Sifut Resto!</h1>
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
    const resto = await RestoDbSource.home();
    const restoContainer = document.querySelector('#cards');
    resto.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
    if (resto.length === 0) {
      restoContainer.innerHTML += `
      <h3><i>Resto not found</i></h3>
      `;
    }
  },
};

export default Home;
