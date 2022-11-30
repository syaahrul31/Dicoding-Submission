import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `<div>
        <ul class="ul-back">
            <a href="/">
                <li>
                    <h3 class="back"><b>< back</b></h3>
                </li>
            </a>
        </ul>
        <h1 align="center">${resto.name}</h1>
        <img src='${CONFIG.BASE_IMAGE_URL + resto.pictureId}' alt='gambar ${resto.name}'>
    </div>
    <div>
        <h3>Description</h3>
        <p aria-label="description" class='info'>${resto.description}</p>

        <h3>City</h3>
        <p aria-label="city" class='info'>${resto.city}</p>

        <h3>Address</h3>
        <p aria-label="address" class='info'>${resto.address}</p>

        <h3>Categories</h3>
        <p aria-label="categories" class='info'>${resto.categories.map((category) => category.name).join(', ')}</p>

        <h3>Menu</h3>
        <div class='info'>
            <p><b>Food :</b> ${resto.menus.foods.map((food) => food.name).join(', ')}</p>
            <p><b>Drink :</b> ${resto.menus.drinks.map((drink) => drink.name).join(', ')}</p>
        </div>
    </div>
    <div>
        <h3>Reviews</h3>
        <div class='info'>
        ${resto.customerReviews.map((review) => `
            <h4><b>${review.name}</b></h4>
            <p><i>${review.date}</i></p>
            <p>" ${review.review} "</p>
            <hr>
            `).join('')}
        </div>
    </div>
`;

const createRestoItemTemplate = (resto) => `
<a href="#/resto/${resto.id}">
    <article 
    aria-label="${resto.name}.
    terletak di kota ${resto.city}. 
    deskripsi, ${resto.description}">
        <img src='${CONFIG.BASE_IMAGE_URL + resto.pictureId}' alt='gambar ${resto.name}'>
        <div class='desc'>
            <h3>${resto.name}</h3>
            <p><b>${resto.city} | <i class="fas fa-star" style="color: orange"></i>
            ${resto.rating}</b></p>
            <p>${resto.description.slice(0, 110)}...</p>
        </div>
    </article>
</a>
`;

const createLikeButtonTemplate = () => `
<button aria-label="sukai resto ini" id="likeButton" class="like">
  <i class="far fa-heart" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="tidak sukai resto ini" id="likeButton" class="like">
  <i class="fas fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
