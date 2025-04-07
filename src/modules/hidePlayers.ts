const hidePlayers = {
  isHidden: false,
  handler: () => {
    if (hidePlayers.isHidden) {
      listItem.textContent = "Show players";
      frame?.classList.remove("hide-players");
    } else {
      listItem.textContent = "Hide players";
      frame?.classList.add("hide-players");
    }

    hidePlayers.isHidden = !hidePlayers.isHidden;
  },
};
const frame = document.querySelector("#gameFrame");
const listItem = document.createElement("li");
listItem.textContent = "Hide players";
listItem.setAttribute("role", "button");
listItem.setAttribute("aria-pressed", hidePlayers.isHidden ? "true" : "false");

listItem.addEventListener("click", () => {
  hidePlayers.handler();
});

export default listItem;
