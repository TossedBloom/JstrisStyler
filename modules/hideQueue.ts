const hideQueue = {
  hidden: 0,
  handler: (el: HTMLElement) => {
    hideQueue.hidden++;

    if (hideQueue.hidden == 6) {
      hideQueue.hidden = 0;
    }

    el.style.top = previewCoverElDimensions[hideQueue.hidden].top;
    el.style.height = previewCoverElDimensions[hideQueue.hidden].height;
    console.log(hideQueue.hidden);
  },
};

const previewCoverEl = document.createElement("div");
previewCoverEl.id = "previewCover";
document.querySelector("#rstage")?.appendChild(previewCoverEl);

const previewCoverElDimensions = [
  { top: "0px", height: "0px" },
  { top: "286px", height: "85px" },
  { top: "240px", height: "120px" },
  { top: "168px", height: "192px" },
  { top: "96px", height: "264px" },
  { top: "24px", height: "336px" },
];

const listItem = document.createElement("li");
listItem.textContent = "Toggle queue";
listItem.setAttribute("role", "button");
listItem.addEventListener("click", () => {
  hideQueue.handler(previewCoverEl);
});

export default listItem;
