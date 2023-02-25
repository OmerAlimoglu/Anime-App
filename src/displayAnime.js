import { fetchData } from "./fetchData.js";

const animeDisplayElement = document.querySelector(".anime-display");
const animeDivElement = document.createElement("div");
animeDivElement.classList.add("anime-div");
animeDisplayElement.appendChild(animeDivElement);

function displayAnime(animeList) {
  animeList.forEach((anime) => {
    const animeName = anime.title_english || anime.title;
    const animeImage = anime.images.jpg.image_url;
    const animeItem = `
      <li>
        <img src="${animeImage}" alt="${animeName} poster">
        <h2>${animeName}</h2>
      </li>
    `;
    animeDivElement.innerHTML += animeItem;
  });
}

export function initializeAnimeDisplay() {
  fetchData()
    .then((data) => {
      const animeList = data.data;
      displayAnime(animeList);
    })
    .catch((error) => {
      console.log(error);
    });
}
