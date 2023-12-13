const arrow = document.querySelector(".bx");
arrow.addEventListener("click", () => {
  arrow.classList.toggle("rotateLeft");
  parent.postMessage({ action: "transformIframe" }, "*");
});
