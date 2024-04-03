import "./upArrow.css";

export const upArrowConfig = () => {
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
