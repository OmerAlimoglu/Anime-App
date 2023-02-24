const url = "https://api.jikan.moe/v4/anime";

async function fetchData() {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`${response.status} ${response.statusText}`);
  return await response.json();
}

const animeDisplayElement = document.getElementsByClassName("anime-display")[0];
const animeDivElement = document.createElement("div");
animeDivElement.classList.add("anime-div");
animeDisplayElement.appendChild(animeDivElement);

function displayData() {
  fetchData()
    .then((data) => {
      const animeList = data.data;
      animeList.map((anime) => {
        console.log(anime);
        const animeName = anime.title_english;
        if (anime.title_english === null) return anime.title;
        console.log(animeName);
        const animeImage = anime.images.jpg.image_url;
        console.log(animeImage);
        const animeList = `<li><img src="${animeImage}" alt="${animeName} poster"> <h2>${animeName}</h2> </li>`;
        animeDivElement.innerHTML += animeList;
      });
    })
    .catch((error) => console.log(error));
}
displayData();
