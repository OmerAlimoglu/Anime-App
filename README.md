# Anime Search App

[You can try it here](I'll add the link later.)

## Description

In this project I'm using https://api.jikan.moe/v4/anime to fetch anime data.<br>
I want to create a single page app for anyone who want to watch anime.<br>
Just search bar will give you the chance to reach a rich content...

[full description will be added later]

## The project structure

```text
root
└── public
    └── style.css
    
    
└── src
    └── app.js    
    └── data.js
    └── pages
        └── favouritesPage.js
        └── initPage.js
└── index.html
(I am not sure about the structure. Organize it properly later.)
```
## The project features

- search and display the list of animes
 

## Must_haves 
-Create a form on  page with a search input field and a "Search" button.<br>
-When the user submits the form, use the Jikan API's anime search endpoint to retrieve a list of anime that match the user's search query.<br>
-When the user clicks on an anime in the search results, use the Jikan API's anime detail endpoint to retrieve more information about the selected anime, such as its     synopsis, rating, and genre. Display this information on a small new page or box.

## Nice_haves 
-Display the results as a list of images and names of the anime.<br>
-On the anime detail page, include a link to related manga by using the Jikan API's manga endpoint to retrieve a list of manga related to the selected anime. Display the results as a list of images and names of the manga.<br>
-Also on the anime detail page, include a link to related anime in the same genre by using the Jikan API's genre endpoint to retrieve a list of anime in the same genre as the selected anime. Display the results as a list of images and names of the related anime.<br>
-A fovourite anime list
