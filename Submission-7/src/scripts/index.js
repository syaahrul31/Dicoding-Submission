import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';
console.log(data);

const burger = document.querySelector('#burger');
const drawer = document.querySelector('#drawer');
const body = document.querySelector('body');

burger.addEventListener('click', (e) => {
	drawer.classList.toggle('open');
	e.stopPropagation();
});

body.addEventListener('click', (e) => {
	drawer.classList.remove('open');
	e.stopPropagation();
});

function getResto(data) {
	let card = '';
	let i = 8;

	data.restaurants.forEach((resto) => {
		card += `
			<article 
				tabindex=${i}
				aria-label="preferensi resto ke ${i - 6} adalah ${resto.name}.
				terletak di kota ${resto.city}. 
				deskripsi, ${resto.description}">

				<img src='${resto.pictureId}' alt='gambar ${resto.name}'>

				<div class='desc'>
					<h3>${resto.name}</h3>
					<p><b>${resto.city} | <i class="fas fa-star" style="color: orange"></i>
					${resto.rating}</b></p>
					<p>${resto.description}</p>
				</div>
			</article>
			`;
		i++;
	});

	document.getElementById('cards').innerHTML = card;
}

getResto(data);
