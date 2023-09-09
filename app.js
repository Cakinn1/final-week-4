/* 


PLAY VIDEO ON LOAD


*/

window.onload = function () {
  const video = document.querySelector(".landing__video");
  video.autoplay = true;
  video.loop = true;
};

/*

SEARCH BAR & MOVIE API


*/

// const movieEl = document.querySelector(".movies");

// const spinnerEl = document.querySelector(".fa-spinner");

// async function onSearchChange(event) {
//   const id = event.target.value;

//   spinnerEl.style.display = "block";

//   const data = await fetch(`https://www.omdbapi.com/?apikey=b8dc057e&s=${id}`);
//   document.querySelector(
//     ".search__bar"
//   ).textContent = `Search Results For: "${id}"`;

//   const movieData = await data.json();

//   spinnerEl.style.display = "none";

//   movieEl.innerHTML = movieData.Search.map(
//     (post) => `
//   <div class="movie" onclick="showUserPosts(${post.id})">
//   <figure class="movie__img--wrapper">
//     <img src="${post.Poster}" class="movie__img" />
//   </figure>
//   <div class="movie__info--wrapper">
//     <p class="movie__title">${post.Title}</p>
//   <p class="movie__date">${post.Year}</p>
//     </div>
//   </div>
// </div>`
//   ).join("");

//   document.querySelector(".browse__row").style.display = "block";
// }

// const movieEl = document.querySelector(".movies");
// const spinnerEl = document.querySelector(".fa-spinner");

// async function onSearchChange(event) {
//   const id = event.target.value;

//   spinnerEl.style.display = "block";

//   const data = await fetch(`https://www.omdbapi.com/?apikey=b8dc057e&s=${id}`);
//   document.querySelector(
//     ".search__bar"
//   ).textContent = `Search Results For: "${id}"`;

//   const movieData = await data.json();

//   spinnerEl.style.display = "none";

//   movieEl.innerHTML = movieData.Search.map((post) => {
//     return `
//       <div class="movie" onclick="showUserPosts(${post.id})">
//         <figure class="movie__img--wrapper">
//           <img src="${post.Poster}" class="movie__img" />
//         </figure>
//         <div class="movie__info--wrapper">
//           <p class="movie__title">${post.Title}</p>
//           <p class="movie__date">${post.Year}</p>
//         </div>
//       </div>
//     `;
//   }).join("");

//   document.querySelector(".browse__row").style.display = "block";
// }

const movieEl = document.querySelector(".movies");
const spinnerEl = document.querySelector(".fa-spinner");
const loaderEl = document.querySelector(".loader");

async function onSearchChange(event) {
  const id = event.target.value;

  spinnerEl.style.display = "block";
  loaderEl.style.display = "block";
  movieEl.style.visibility = "hidden";

  const data = await fetch(`https://www.omdbapi.com/?apikey=b8dc057e&s=${id}`);
  document.querySelector(
    ".search__bar"
  ).textContent = `Search Results For: "${id}"`;

  const movieData = await data.json();

  setTimeout(() => {
    spinnerEl.style.display = "none";
    loaderEl.style.display = "none";
    movieEl.style.visibility = "visible";

    movieEl.innerHTML = movieData.Search.map(
      (post) => `
    <div class="movie" onclick="showUserPosts(${post.id})">
      <figure class="movie__img--wrapper">
        <img src="${post.Poster}" class="movie__img" />
      </figure>
      <div class="movie__info--wrapper">
        <p class="movie__title">${post.Title}</p>
        <p class="movie__date">${post.Year}</p>
      </div>
    </div>
    `
    ).join("");

    document.querySelector(".browse__row").style.display = "block";
  }, 2000);
}
