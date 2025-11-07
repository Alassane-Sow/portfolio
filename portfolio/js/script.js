

document.addEventListener("DOMContentLoaded", function() {
  const hash = window.location.hash; // bv. #python
  if (hash) {
    document.querySelectorAll("section[id]").forEach(sec => sec.style.display = "none");
    const active = document.querySelector(hash);
    if (active) active.style.display = "block";
  }
});





