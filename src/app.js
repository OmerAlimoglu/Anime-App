import { initializeAnimeDisplay } from "./displayAnime.js";
import { searchQuery } from "./searchQuery.js";

window.onload = () => {
  initializeAnimeDisplay();

  const searchFieldElement = document.getElementById("search-input");
  searchFieldElement.onkeyup = (event) => {
    searchQuery(searchFieldElement.value);
  };
};

/* const url = "https://api.jikan.moe/v4/anime";

async function fetchData() {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`${response.status} ${response.statusText}`);
  const data = await response.json();
  console.log(data);
  return data;
}

const animeDisplayElement = document.getElementsByClassName("anime-display")[0];
const animeDivElement = document.createElement("div");
animeDivElement.classList.add("anime-div");
animeDisplayElement.appendChild(animeDivElement);

function displayAnime() {
  fetchData()
    .then((data) => {
      const animeList = data.data;
      animeList.map((anime) => {
        const animeName = anime.title_english;
        if (anime.title_english === null) return anime.title;
        const animeImage = anime.images.jpg.image_url;
        const animeList = `<li><img src="${animeImage}" alt="${animeName} poster"> <h2>${animeName}</h2> </li>`;
        animeDivElement.innerHTML += animeList;
      });
    })
    .catch((error) => console.log(error));
}
displayAnime();

// searchQuery.js == solve the export problem ==

function searchQuery(query) {
  const searchUrl = `https://api.jikan.moe/v4/anime?q=${query}`;
  fetchData(searchUrl).then((data) => {
    const animeList = data.data;
    console.log("animeList:", animeList);
    const searchResults = animeList.map((anime) => {
      if (anime.title_english === null) {
        return anime.title;
      } else {
        return anime.title_english;
      }
      // const animeId = anime.mal_id;
      // const animeUrl = `https://api.jikan.moe/v4/anime/${animeId}`;
      // ... do something with the anime data ...
    });
    console.log(searchResults);
  });
}

window.onload = () => {
  const searchFieldElement = document.getElementById("search-input");
  searchFieldElement.onkeyup = (event) => {
    searchQuery(searchFieldElement.value);
  };
}; */
