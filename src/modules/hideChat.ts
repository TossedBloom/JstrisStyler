const hideChat = {
  isHidden: false,
  handler: () => {
    if (hideChat.isHidden) {
      listItem.textContent = "Show chat";
      frame?.classList.remove("hide-chat");
    } else {
      listItem.textContent = "Hide chat";
      frame?.classList.add("hide-chat");
    }

    hideChat.isHidden = !hideChat.isHidden;
  },
};
const frame = document.querySelector("#gameFrame");
const listItem = document.createElement("li");
listItem.textContent = "Hide chat";
listItem.setAttribute("role", "button");
listItem.setAttribute("aria-pressed", hideChat.isHidden ? "true" : "false");

listItem.addEventListener("click", () => {
  hideChat.handler();
});

export default listItem;
