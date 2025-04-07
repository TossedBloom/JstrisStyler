const cssList = [
  {
    label: "CenterBoard",
    styles: `
        #gameFrame.center-board {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #gameFrame.center-board  #main {
            float: none;
        }`,
  },
  {
    label: "HidePlayers",
    styles: `
        #gameFrame.hide-players  #gameSlots {
            display: none;
        }`,
  },
  {
    label: "HideChat",
    styles: `
        #gameFrame.hide-chat  #chatInputArea {
            display: none;
        }

        #gameFrame.hide-chat  .chatArea {
            display: none;
        }`,
  },
  {
    label: "HidePreviews",
    styles: `
        #previewCover {
            position: absolute;
            width: 110px;
            background-color: black;
        }`,
  },
  {
    label: "TossedBloomLogoButton",
    styles: `
      #TossedBloomLogoButton {
        all: unset;               /* Reset all inherited styles */
        width: 60px;              /* Set width to 60px */
        height: 60px;             /* Set height to 60px */
        background-size: cover;  /* Ensure the image covers the entire button */
        background-position: center;  /* Center the image */
        background-color: black; /* Optional: Add background color (you can remove or change this) */
        border: none;            /* Remove default border */
        outline: none;           /* Remove default outline */
        padding: 0;              /* Remove padding */
        margin: 0;               /* Remove margin */
        position: absolute;
        left: 15px;
      }

      #TossedBloomLogoButton:hover,
      #TossedBloomLogoButton:focus {
        cursor: pointer;
      }`,
  },
  {
    label: "TossedBloomSubMenu",
    styles: `
      #TossedBloomSubMenu {
        display: flex;
        flex-direction: column;
        margin: 0;
        position: absolute;
        transform: scale(0.01);
        left: 80px;
        width: 170px;
        padding: 0;
        list-style-type: none;
        border: 2px solid white;
        z-index: 9999;
      }

      #TossedBloomSubMenu.show {
        transform: scale(1);
      }

      #TossedBloomSubMenu li {
        border-bottom: 1px solid white;
        padding: 0.4rem 0.5rem;
      }

      #TossedBloomSubMenu li:hover,
      #TossedBloomSubMenu li:focus {
        cursor: pointer;
        background: white;
        color: black;
      }

      #TossedBloomSubMenu li:last-child {
        border-bottom: none;
      }
    `,
  },
];

const styleEl = document.createElement("style");
cssList.forEach((style) => {
  if (style.styles) {
    styleEl.textContent += style.styles;
  }
});
document.head.appendChild(styleEl);

console.log("Already appended style");
