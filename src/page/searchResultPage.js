import { initializeAnimeDisplay } from "../displayAnime.js";

const searchResultAnimeElement = document.querySelector(".search-anime-div");

export function renderClickedGenreResult(data) {
  const animeImg = data.images && data.images.jpg && data.images.jpg.image_url;
  const animeName = data.title_english || data.title;
  const animeScore = data.score;
  const animeSynopsis = data.synopsis;
  const animeTrailer = data.trailer && data.trailer.embed_url;
  const searchResultPageElement = document.createElement("div");
  searchResultPageElement.classList.add("clicked-anime");
  searchResultPageElement.innerHTML = `
            <img src="${animeImg}" alt="anime image">
            <h2>${animeName}</h2>
            <p class="score">Score: ${animeScore}</p>
            <p class="synopsis">Synopsis: ${animeSynopsis}</p>                      
            <p class="trailer">For trailer click <a href="${animeTrailer}">here</a>.</p>
            <button id="close-button">Close</button>
            `;

  searchResultAnimeElement.appendChild(searchResultPageElement);
}

// tried to return homepage when click the close button but didn't work
const closeButton = document.querySelector("#close-button");
if (closeButton) {
  closeButton.addEventListener("click", function (e) {
    initializeAnimeDisplay;
  });
}
