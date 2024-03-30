// import "./gallery.css";

// let keyWord = "";
// let page;

// export const searchImages = async () => {
//   const searchBar = document.querySelector("input");
//   const gridGallery = document.querySelector(".grid-gallery");

//   const accesKey = "woWM4AxFrJe9NXSiYDFuBkUb8l3aFClA12t438zVkIg";
//   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accesKey}&per_page=12`;

//   keyWord = searchBar.value;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);

//     if (page === 1) {
//       gridGallery.innerHTML = "";
//     }

//     const images = data.results;

//     images.map((result) => {
//       const image = document.createElement("img");
//       const imageLink = document.createElement("a");
//       const imageDescription = document.createElement("p");

//       image.src = result.urls.small;
//       imageLink.href = result.links.html;
//       imageLink.target = "_blank";
//       imageDescription.textContent = result.alt_description;

//       imageLink.appendChild(image);
//       gridGallery.appendChild(imageLink);
//       imageLink.appendChild(imageDescription);
//     });
//   } catch (error) {
//     console.error("Error fetching images:", error);
//   }
// };

// export const showMoreImages = () => {
//   const showMoreButton = document.querySelector("#show-more");
//   const searchBar = document.querySelector("input");

//   showMoreButton.textContent = "Show More";

//   showMoreButton.addEventListener("click", async () => {
//     page++;
//     await searchImages();
//   });

//   searchBar.addEventListener("input", searchImages);
// };

// export const gridGalleryConfig = () => {
//   const searchBarContainer = document.querySelector(".search-bar-container");
//   const showMoreButton = document.querySelector("#show-more");

//   searchBarContainer.addEventListener("submit", (e) => {
//     e.preventDefault();
//     searchImages();
//   });
// };

import "./gallery.css";

export const gridGalleryConfig = () => {
  const searchBarContainer = document.querySelector(".search-bar-container");
  const searchBar = document.querySelector("input");
  const gridGallery = document.querySelector(".grid-gallery");
  const showMoreButton = document.querySelector("#show-more");

  let keyWord = "";
  let page = 1;
  const accesKey = "woWM4AxFrJe9NXSiYDFuBkUb8l3aFClA12t438zVkIg";

  async function searchImages() {
    keyWord = searchBar.value;

    try {
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accesKey}&per_page=12`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (page === 1) {
        gridGallery.innerHTML = "";
      }

      const images = data.results;

      images.forEach((result) => {
        const image = document.createElement("img");
        const imageLink = document.createElement("a");
        const imageDescription = document.createElement("p");

        image.src = result.urls.small;
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageDescription.textContent = result.alt_description;

        imageLink.appendChild(image);
        gridGallery.appendChild(imageLink);
        imageLink.appendChild(imageDescription);
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  window.addEventListener("load", searchImages);

  searchBarContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImages();
  });

  showMoreButton.textContent = "Show More";

  showMoreButton.addEventListener("click", () => {
    page++;
    searchImages();
  });

  searchBar.addEventListener("input", searchImages);
};
