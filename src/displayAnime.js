import { fetchData } from "./fetchData.js";

// const animeDisplayElement = document.querySelector(".anime-display");
const animeDivElement = document.createElement("div");
animeDivElement.classList.add("anime-div");
document.body.appendChild(animeDivElement);

export function displayAnime(animeList) {
  animeList.forEach((anime) => {
    const animeImg = anime.images.jpg.image_url;
    const animeName = anime.title_english || anime.title;
    const animeScore = anime.score;
    const animeSynopsis = anime.synopsis;
    const animeTrailer = anime.trailer_url;
    const animeItem = `
    <div class= "render-genre">
    <img src="${animeImg}" alt="anime image"/>
    <h2>${animeName}</h2>
    <p>Score: ${animeScore}</p>
    <h3>Synopsis</h3>
    <p>${animeSynopsis}</p>             
    <p>For trailer click: <a href="${animeTrailer}">here</a>.</p>
    </div>
    `;
    animeDivElement.innerHTML += animeItem;
  });
}

export function initializeAnimeDisplay() {
  fetchData()
    .then((data) => {
      const animeList = data.data;
      // console.log(animeList);
      displayAnime(animeList);
    })
    .catch((error) => {
      console.log(error);
    });
}
