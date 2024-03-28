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

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accesKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (page === 1) {
      gridGallery.innerHTML = "";
    }

    const images = data.results;
    console.log(images);

    images.map((result) => {
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
  }

  searchBarContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
  });

  searchImages();

  showMoreButton.textContent = "Show More";

  showMoreButton.addEventListener("click", () => {
    page++;
    searchImages();
  });
};
