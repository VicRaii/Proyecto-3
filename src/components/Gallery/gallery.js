import "./gallery.css";

let keyWord = "";
let page;

export const searchImages = async () => {
  const searchBar = document.querySelector("input");
  const gridGallery = document.querySelector(".grid-gallery");

  const accesKey = "woWM4AxFrJe9NXSiYDFuBkUb8l3aFClA12t438zVkIg";

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
};

export const showMoreImages = () => {
  const showMoreButton = document.querySelector("#show-more");
  const searchBar = document.querySelector("input");

  showMoreButton.textContent = "Show More";

  showMoreButton.addEventListener("click", async () => {
    page++;
    await searchImages();
  });

  searchBar.addEventListener("input", searchImages);
};

export const gridGalleryConfig = () => {
  const searchBarContainer = document.querySelector(".search-bar-container");
  const refreshButton = document.querySelector("#refresh-button");

  page = Math.floor(Math.random() * 155) + 1;

  searchBarContainer.addEventListener("submit", async (e) => {
    e.preventDefault();
    await searchImages();
  });

  refreshButton.textContent = "Refresh";

  refreshButton.addEventListener("click", async () => {
    page = Math.floor(Math.random() * 155) + 1;
    await searchImages();
  });

  // Llamar a searchImages al cargar la página
  window.addEventListener("load", async () => {
    await searchImages();
    showMoreImages();
  });
};
