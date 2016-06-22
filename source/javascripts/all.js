// This is where it all goes :)
document.addEventListener("DOMContentLoaded", function() {
  addMenuToggle()
});

var addMenuToggle = function(){
  var menuToggle = document.querySelectorAll('.menu-collapsed')[0]
  menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('menu-expanded');
  });
}
