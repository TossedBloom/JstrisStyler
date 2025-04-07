const centerBoard = {
  isCentered: false,
  handler: () => {
    centerBoard.isCentered = !centerBoard.isCentered;
    if (centerBoard.isCentered) {
      listItem.textContent = "Uncenter board";
      frame?.classList.add("center-board");
    } else {
      listItem.textContent = "Center board";
      frame?.classList.remove("center-board");
    }
  },
};
const frame = document.querySelector("#gameFrame");
const listItem = document.createElement("li");
listItem.textContent = "Center board";
listItem.setAttribute("role", "button");
listItem.setAttribute(
  "aria-pressed",
  centerBoard.isCentered ? "true" : "false"
);

listItem.addEventListener("click", () => {
  console.log("clicked");
  centerBoard.handler();
});

export default listItem;
