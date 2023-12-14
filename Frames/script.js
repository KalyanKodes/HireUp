function hire() {
  alert("This is just a Demo Website");
}

document.querySelectorAll("button").forEach((b) => {
  b.addEventListener("click", hire);
});
