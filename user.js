// // async function searchOnChange(event) {
// //   const id = localStorage.getItem("id")

// //   const data = await fetch(`https://gogoanime.consumet.stream/genre/${id}`);

// //   const userData = await data.json();
// //   console.log(userData)
// // }

// // searchOnChange();

// async function onSearchChange(event) {
//   const id = event.target.value;
//   const data = await fetch(`https://www.omdbapi.com/?apikey=b8dc057e&s=${id}`);
//   const movieData = await data.json();

//   movieSearchEl.innerHTML = movieData.Search.map(
//     (post) => `
//     <div class="movie" onclick="showUserPosts(${post.id})">
//     <figure class="movie__img--wrapper">
//       <img src="${post.Poster}" class="movie__img" />
//     </figure>
//     <div class="movie__info--wrapper">
//       <p class="movie__title">${post.Title}</p>
//     <p class="movie__date">${post.Year}</p>
//       </div>
//     </div>
//   </div>`
//   ).join("");
// }
// onSearchChange();

// const movieSearchEl = document.querySelector(".browse__input");

// async function main() {
//   const id = localStorage.getItem("id");
//   const data = await fetch(`https://www.omdbapi.com/?apikey=b8dc057e&s=${id}`);
//   const movieData = await data.json();

//   movieSearchEl.innerHTML = movieData.Search.map(
//     (post) => `<input
//   class="browse__input"
//   type="${post.Title}"
//   placeholder="Search By Title!"
//   onchange="showMoviePosts(event)"
// />
// <button class="browse__btn">
//   <i class="fa-solid fa-magnifying-glass"></i>
// </button>`
//   ).join("");
// }
// main();
