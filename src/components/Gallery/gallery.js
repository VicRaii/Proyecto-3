import "./gallery.css";

let keyWord = "";
let page = 1;

export const gridGalleryConfig = () => {
  const searchBarContainer = document.querySelector(".search-bar-container");
  const searchBar = document.querySelector("input");
  const gridGallery = document.querySelector(".grid-gallery");

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

        image.src = result.urls.regular;
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

  searchBarContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImages();
  });

  searchBar.addEventListener("input", searchImages);

  const showMoreButtonConfig = () => {
    const showMoreButton = document.querySelector("#show-more");

    showMoreButton.textContent = "Show More";

    showMoreButton.addEventListener("click", () => {
      page++;
      searchImages();
    });
  };

  showMoreButtonConfig();
};

const upArrowConfig = () => {
  const upArrow = document.querySelector("#up-arrow");
  const upArrowImage = document.createElement("img");

  upArrow.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  upArrowImage.src = "/assets/up-arrow.png";
  upArrowImage.alt = "Go up Arrow";

  upArrow.appendChild(upArrowImage);
};

upArrowConfig();
