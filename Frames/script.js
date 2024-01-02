function hire() {
  alert("Sent mail");
}

document.querySelectorAll("button").forEach((b) => {
  b.addEventListener("click", hire);
});
