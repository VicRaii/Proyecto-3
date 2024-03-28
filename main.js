import {
  gridGalleryConfig,
  searchImages,
  showMoreImages,
} from "./src/components/Gallery/gallery";

import {
  buttonContainerConfig,
  logoContainerConfig,
  searchBarContainerConfig,
} from "./src/components/Header/header";

import "./style.css";

logoContainerConfig();
searchBarContainerConfig();
buttonContainerConfig();

searchImages();
showMoreImages();
gridGalleryConfig();
