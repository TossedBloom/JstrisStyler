import { base64string } from "./assets/tossedBloomLogo";
import HidePlayers from "./modules/hidePlayers";
import CenterBoard from "./modules/centerBoard";
import HideQueue from "./modules/hideQueue";
import HideChat from "./modules/hideChat";

const createButton = () => {
  const button = document.createElement("button");
  button.id = "TossedBloomLogoButton";

  // Set the background image to the Base64 string
  button.style.backgroundImage = `url(${base64string})`;

  return button;
};

const createSubMenu = () => {
  const submenu = document.createElement("ul");
  submenu.id = "TossedBloomSubMenu";
  submenu.append(HidePlayers);
  submenu.append(CenterBoard);
  submenu.append(HideQueue);
  submenu.append(HideChat);
  return submenu;
};

const insertMenu = () => {
  // Add input element to accept user inputs
  const container = document.querySelector("#gc");
  const button = createButton();
  const submenu = createSubMenu();
  container?.prepend(button);
  container?.prepend(submenu);

  button.addEventListener("click", () => {
    submenu.classList.toggle("show");
  });

  //   app.append(inputEl);
  //   inputEl.addEventListener("keydown", (e) => {
  //     if (e.key === "Enter") {
  //       e.preventDefault();
  //       const target = e.target;
  //       if (target.value in handlers) {
  //         handlers[target.value](); // Ensuring the key is valid
  //         target.value = "";
  //       }

  //       // Set a timeout to refocus the input field after a short delay
  //       // I think jstris has a listener on the whole damn doc that focuses on chat
  //       setTimeout(() => {
  //         target.focus();
  //       }, 20); // 20ms delay to allow any other script to complete first
  //     }
  //   });
};

insertMenu();
