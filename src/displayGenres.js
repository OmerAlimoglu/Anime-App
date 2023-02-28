import { fetchData } from "./fetchData.js";
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

  fetchData(animeUrl)
    .then((data) => {
      const animeList = data.data;
      const topAnimes = document.getElementsByClassName("anime-div");
      topAnimes.innerHTML = "";
      displayAnime(animeList);
      toggleGenreList(); // hide the genre list after a genre is selected
    })
    .catch((error) => {
      const errorElement = document.getElementById("error");
      errorElement.textContent = "Error: Network or HTTP error!";
    });
}

function displayGenres(genreList) {
  const genreListElement = document.querySelector(".genre-list");
  // genreListElement.innerHTML = "";

  const dropdownListElement = document.createElement("ul");
  dropdownListElement.classList.add("dropdown-list");

  genreList.forEach((genre) => {
    const link = document.createElement("p");
    link.textContent = genre.name;
    link.dataset.genreId = genre.mal_id;
    link.addEventListener("click", handleGenreClick);

    const listItem = document.createElement("li");
    listItem.appendChild(link);
    dropdownListElement.appendChild(listItem);
  });
  genreListElement.appendChild(dropdownListElement);
}

// hide the dropdown list if somewhere else clicked on the page

document.addEventListener("click", (event) => {
  const dropdown = document.querySelector(".genre-list");
  if (
    !dropdown.contains(event.target) &&
    !event.target.classList.contains("genre-button")
  ) {
    dropdown.classList.add("hidden");
  }
});

export function initializeGenreDisplay() {
  const genreUrl = "https://api.jikan.moe/v4/genres/anime";
  fetchData(genreUrl)
    .then((data) => {
      const genreList = data.data;
      displayGenres(genreList);
    })
    .catch((error) => {
      const errorElement = document.getElementById("error");
      errorElement.textContent = "Error: Network or HTTP error!";
    });
}
