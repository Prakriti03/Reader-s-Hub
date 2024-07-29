export function saveChapters() {
  const editor = document.getElementById("editor") as HTMLElement;
  const boldBtn = document.getElementById("bold-btn") as HTMLButtonElement;
  const italicBtn = document.getElementById("italic-btn") as HTMLButtonElement;
  const underlineBtn = document.getElementById(
    "underline-btn"
  ) as HTMLButtonElement;

  boldBtn.addEventListener("click", () => formatText("bold"));
  italicBtn.addEventListener("click", () => formatText("italic"));
  underlineBtn.addEventListener("click", () => formatText("underline"));
}

function formatText(command: string) {
  document.execCommand(command);
}
