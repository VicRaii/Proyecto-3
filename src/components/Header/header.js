import { gridGalleryConfig } from "../Gallery/gallery";
import "./header.css";

export const headerConfig = () => {
  const logoContainerConfig = () => {
    const logoContainer = document.querySelector(".logo-container");

    logoContainer.innerHTML = `
        <a href="#" target="_blank">
           <img src="/assets/pinterest-big-logo.png" alt="pinterestLogo">
         </a>
    `;
  };

  const searchBarContainerConfig = () => {
    const searchBarContainer = document.querySelector(".search-bar-container");
    const searchBar = document.createElement("input");
    const searchButton = document.createElement("button");

    searchBar.type = "search";
    searchBar.classList.add("search-bar");
    searchBar.id = "search-box";
    searchBar.placeholder = "What are you searching for?";
    searchButton.textContent = "Search";

    searchBarContainer.appendChild(searchBar);
    searchBarContainer.appendChild(searchButton);
  };

  const buttonContainerConfig = () => {
    const buttonContainer = document.querySelector(".button-container");
    const refreshButton = document.createElement("button");
    const gridGallery = document.querySelector(".grid-gallery");

    refreshButton.type = "button";
    refreshButton.classList.add("refresh-button");
    refreshButton.textContent = "Refresh";

    buttonContainer.appendChild(refreshButton);

    refreshButton.addEventListener("click", () => {
      gridGallery.innerHTML = "";
      location.reload();
    });
  };

  searchBarContainerConfig();
  logoContainerConfig();
  buttonContainerConfig();
  gridGalleryConfig();
};
