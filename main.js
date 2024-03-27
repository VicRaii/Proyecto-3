import { gridGalleryConfig } from "./src/components/Gallery/gallery";
import { headerConfig } from "./src/components/Header/header";
import { showMoreButtonConfig } from "./src/components/ShowMoreButton/showMoreButton";
import "./style.css";

// fetch(
//   `https://api.unsplash.com/photos/?client_id=woWM4AxFrJe9NXSiYDFuBkUb8l3aFClA12t438zVkIg`
// )
//   .then((res) => res.json())
//   .catch((error) => console.log(error))
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

headerConfig();
gridGalleryConfig();
showMoreButtonConfig();
