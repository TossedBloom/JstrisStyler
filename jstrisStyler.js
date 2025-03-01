// ==UserScript==
// @name         JStris custom style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  TossedBloom JStris styles
// @author       TossedBloom
// @match        https://jstris.jezevec10.com/
// @grant        none
// ==/UserScript==

(function() {
    console.log('TossedBloom jstris style TamperMonkey script is running')
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
          }

          #gameFrame.center-board  #players {
              float: none;
              /* display: flex; */
          }

          #gameFrame.center-board  #gameSlots {
              display: none;
          }`
    },
    {
      label: "HidePreviews",
      styles: `
          #previewCover {
              position: absolute;
              width: 110px;
              background-color: black;
          }`
    }
  ]

  const handlers = {
    centerBoard: () => {
      document.querySelector("#gameFrame")?.classList.add("center-board")
    },

    uncenterBoard: () => {
      document.querySelector("#gameFrame")?.classList.remove("center-board")
    },

    hidePreviews: (numberOfPreviews = 0) => {
      let previewCover = document.querySelector("#previewCover")
      if (!previewCover) {
          previewCover = document.createElement("div")
          previewCover.setAttribute("id", "previewCover");
          document.querySelector('#rstage').appendChild(previewCover)
      }

      const dimensions = [
          { top: "0px", height: "0px" },
          { top: "286px", height: "85px" },
          { top: "240px", height: "120px" },
          { top: "168px", height: "192px" },
          { top: "96px", height: "264px" },
          { top: "24px", height: "336px" }
      ]

      previewCover.style.top = dimensions[numberOfPreviews].top
      previewCover.style.height = dimensions[numberOfPreviews].height
    },

    hidePreviews0: () => {
      handlers.hidePreviews(0)
    },
    hidePreviews1: () => {
      handlers.hidePreviews(1)
    },
    hidePreviews2: () => {
      handlers.hidePreviews(2)
    },
    hidePreviews3: () => {
      handlers.hidePreviews(3)
    },
    hidePreviews4: () => {
      handlers.hidePreviews(4)
    },
    hidePreviews5: () => {
      handlers.hidePreviews(5)
    }
  }

  const init = () => {
    // Prepare styles
    const styleEl = document.createElement("style")
    cssList.forEach(style => {
      if (style.styles) {
        styleEl.textContent += style.styles
      }
    })
    document.head.appendChild(styleEl)

    // Add input element to accept user inputs
    const app = document.querySelector("#app")
    const inputEl = document.createElement("input")
    app.append(inputEl)
    inputEl.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault()
        const target = e.target
        if (target.value in handlers) {
          handlers[target.value]() // Ensuring the key is valid
          target.value = ""
        }

        // Set a timeout to refocus the input field after a short delay
        // I think jstris has a listener on the whole damn doc that focuses on chat
        setTimeout(() => {
            target.focus(); 
        }, 20);  // 20ms delay to allow any other script to complete first
      }
    })
  }

  init()
})();
