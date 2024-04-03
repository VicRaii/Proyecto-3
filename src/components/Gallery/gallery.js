import "./gallery.css";

let page = 1;
const accesKey = "woWM4AxFrJe9NXSiYDFuBkUb8l3aFClA12t438zVkIg";

export const gridGalleryConfig = () => {
  const searchBarContainer = document.querySelector(".search-bar-container");
  const searchBar = document.querySelector(".search-bar");
  const gridGallery = document.querySelector(".grid-gallery");

  async function searchImages(keyword = "") {
    try {
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=15`;
      const response = await fetch(url);
      const data = await response.json();

      if (page === 1) {
        gridGallery.innerHTML = "";
      }

      const images = data.results;

      images.forEach((result) => {
        const image = document.createElement("img");
        const imageLink = document.createElement("a");
        const imageDescription = document.createElement("p");

        image.src = result.urls.regular;
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageDescription.textContent =
          result.alt_description || "No description";

        imageLink.appendChild(image);
        gridGallery.appendChild(imageLink);
        imageLink.appendChild(imageDescription);
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  async function searchRandomImages() {
    try {
      const url = `https://api.unsplash.com/photos/random?count=15&client_id=${accesKey}`;
      const response = await fetch(url);
      const data = await response.json();

      gridGallery.innerHTML = "";

      data.forEach((result) => {
        const image = document.createElement("img");
        const imageLink = document.createElement("a");
        const imageDescription = document.createElement("p");

        image.src = result.urls.regular;
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageDescription.textContent =
          result.alt_description || "No description";

        imageLink.appendChild(image);
        gridGallery.appendChild(imageLink);
        imageLink.appendChild(imageDescription);
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  searchBarContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImages(searchBar.value);
  });

  searchBar.addEventListener("input", () => {
    searchImages(searchBar.value);
  });

  const showMoreButtonConfig = () => {
    const showMoreButton = document.querySelector("#show-more");

    showMoreButton.textContent = "Show More";

    showMoreButton.addEventListener("click", () => {
      page++;
      const keyword = searchBar.value;
      if (keyword === "") {
        searchRandomImages();
      } else {
        searchImages(keyword);
      }
    });
  };

  showMoreButtonConfig();
  searchRandomImages();
};
