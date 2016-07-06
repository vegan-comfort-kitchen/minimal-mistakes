// This is where it all goes :)
document.addEventListener("DOMContentLoaded", function() {
  addMenuToggle()
});

var addMenuToggle = function(){
  var menuToggle = document.querySelectorAll('.menu-toggle')[0]
  var menu = document.querySelectorAll('.menu')[0]
  menuToggle.addEventListener('click', function(){
    menu.classList.toggle('menu-expanded');
  });
  menu.addEventListener('click', function(){
    menu.classList.toggle('menu-expanded');
  });
}
