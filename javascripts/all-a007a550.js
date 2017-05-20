document.addEventListener("DOMContentLoaded", function() {
  addMenuToggle()
});
var addMenuToggle = function() {
  var e = document.querySelectorAll(".nav-toggle")[0],
    n = document.querySelectorAll(".nav")[0];
  e.addEventListener("click", function() {
    n.classList.toggle("nav-expanded")
  }), n.addEventListener("click", function() {
    n.classList.toggle("nav-expanded")
  })
};
