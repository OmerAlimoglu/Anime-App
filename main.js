const url = "https://api.jikan.moe/v4/anime";

async function fetchData() {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`${response.status} ${response.statusText}`);
  return await response.json();
}

function displayData() {
  const animeDisplayElement =
    document.getElementsByClassName("anime-display")[0];
  fetchData()
    .then((data) => {
      const animeList = data.data;
      const animeGridElement = document.createElement("div");
      animeGridElement.classList.add("anime-grid");
      animeList.map((anime) => {
        console.log(anime);
        const animeDivElement = document.createElement("div");
        animeDivElement.classList.add("anime-div");
        document.body.appendChild(animeDivElement);
        const animeName = anime.title_english;
        if (anime.title_english === null) return anime.title;
        console.log(animeName);
        const animeImage = anime.images.jpg.image_url;
        console.log(animeImage);
        const animeList = `<li><img src="${animeImage}" alt="${animeName} poster"> <h2>${animeName}</h2> </li>`;
        animeDivElement.innerHTML += animeList;
        animeGridElement.appendChild(animeDivElement);
      });
      animeDisplayElement.appendChild(animeGridElement);
    })
    .catch((error) => console.log(error));
}
displayData();
