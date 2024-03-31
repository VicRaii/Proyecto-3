// import "./header.css";

// export const logoContainerConfig = () => {
//   const logoContainer = document.querySelector(".logo-container");

//   const createLogoLink = document.createElement("a");
//   const createLogoImage = document.createElement("img");

//   createLogoLink.href = "#";
//   createLogoLink.target = "_blank";
//   createLogoLink.classList.add("pinterest-logo-link");
//   createLogoImage.src = "./assets/pinterest-big-Logo.png";
//   createLogoImage.alt = "pinterest-logo";

//   logoContainer.appendChild(createLogoLink);
//   createLogoLink.appendChild(createLogoImage);
// };

// export const searchBarContainerConfig = () => {
//   const searchBarContainer = document.querySelector(".search-bar-container");
//   const searchBar = document.createElement("input");
//   const searchButton = document.createElement("button");

//   searchBar.type = "search";
//   searchBar.classList.add("search-bar");
//   searchBar.id = "search-box";
//   searchBar.placeholder = "What are you looking for?";
//   searchButton.textContent = "🔍";

//   searchBarContainer.appendChild(searchBar);
//   searchBarContainer.appendChild(searchButton);
// };

// export const buttonContainerConfig = () => {
//   const gridGallery = document.querySelector(".grid-gallery");
//   const buttonContainer = document.querySelector(".button-container");
//   const refreshButton = document.createElement("button");

//   refreshButton.type = "button";
//   refreshButton.classList.add("refresh-button");
//   refreshButton.textContent = "Refresh";

//   buttonContainer.appendChild(refreshButton);

//   refreshButton.addEventListener("click", () => {
//     gridGallery.innerHTML = "";
//   });
// };

import "./header.css";

export const headerConfig = () => {
  // const logoContainerConfig = () => {
  //   const logoContainer = document.querySelector(".logo-container");

  //   const createLogoLink = document.createElement("a");
  //   const createLogoImage = document.createElement("img");

  //   createLogoLink.href = "#";
  //   createLogoLink.target = "_blank";
  //   createLogoLink.classList.add("pinterest-logo-link");
  //   createLogoImage.src = "./public/assets/pinterest-big-logo.png";
  //   createLogoImage.alt = "pinterest-logo";

  //   logoContainer.appendChild(createLogoLink);
  //   createLogoLink.appendChild(createLogoImage);
  // };

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
    // const searchButton = document.createElement("button");

    searchBar.type = "search";
    searchBar.classList.add("search-bar");
    searchBar.id = "search-box";
    searchBar.placeholder = "What are you looking for?";
    // searchButton.textContent = "🔍";

    searchBarContainer.appendChild(searchBar);
    // searchBarContainer.appendChild(searchButton);
  };

  const buttonContainerConfig = () => {
    const gridGallery = document.querySelector(".grid-gallery");
    const buttonContainer = document.querySelector(".button-container");
    const refreshButton = document.createElement("button");

    refreshButton.type = "button";
    refreshButton.classList.add("refresh-button");
    refreshButton.textContent = "Refresh";

    buttonContainer.appendChild(refreshButton);

    refreshButton.addEventListener("click", () => {
      gridGallery.innerHTML = "";
    });
  };

  searchBarContainerConfig();
  logoContainerConfig();
  buttonContainerConfig();
};
