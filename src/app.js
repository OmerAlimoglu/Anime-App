import { initializeAnimeDisplay } from "./displayAnime.js";
import { initializeGenreDisplay } from "./displayGenres.js";
import { searchQuery } from "./searchQuery.js";

window.onload = () => {
  initializeAnimeDisplay();
  initializeGenreDisplay();
};

// I got this debounce function from 'freeCodeCamp.com', to ensure when the user type for search to solve the too many request error..

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const processChange = debounce(() => searchQuery(searchFieldElement.value));
const searchFieldElement = document.getElementById("search-input");
searchFieldElement.addEventListener("keyup", processChange);
