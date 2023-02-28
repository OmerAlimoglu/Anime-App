import { fetchData } from "./fetchData.js";
import { fetchGenreData } from "./fetchData.js";
import { displayAnime } from "./displayAnime.js";

const genreButton = document.getElementsByClassName("genre-button")[0];
genreButton.addEventListener("click", toggleGenreList);

function toggleGenreList() {
  const dropdown = document.querySelector(".genre-list");
  dropdown.classList.toggle("hidden");
}

function handleGenreClick(event) {
  const genreId = event.target.dataset.genreId;
  const animeUrl = `https://api.jikan.moe/v4/anime?genres=${genreId}&limit=10`;
  console.log(animeUrl);
  fetchGenreData(animeUrl)
    .then((data) => {
      const animeList = data.data;
      console.log("genre", animeList);
      displayAnime(animeList);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayGenres(genreList) {
  const genreListElement = document.getElementById("genre-list");
  genreListElement.innerHTML = "";

  const dropdownList = document.createElement("ul");
  dropdownList.classList.add("dropdown-list");

  genreList.forEach((genre) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = genre.name;
    link.dataset.genreId = genre.mal_id;
    link.addEventListener("click", handleGenreClick);

    const listItem = document.createElement("li");
    listItem.appendChild(link);
    dropdownList.appendChild(listItem);
  });

  genreListElement.appendChild(dropdownList);
}

export function initializeGenreDisplay() {
  const genreUrl = "https://api.jikan.moe/v4/genres/anime";
  fetchData(genreUrl)
    .then((data) => {
      const genreList = data.data;
      console.log(genreList);
      displayGenres(genreList);
    })
    .catch((error) => {
      console.log(error);
    });
}
