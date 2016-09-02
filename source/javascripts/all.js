// This is where it all goes :)
document.addEventListener("DOMContentLoaded", function() {
  addMenuToggle()
});

var addMenuToggle = function(){
  var navToggle = document.querySelectorAll('.nav-toggle')[0]
  var nav = document.querySelectorAll('.nav')[0]
  navToggle.addEventListener('click', function(){
    nav.classList.toggle('nav-expanded');
  });
  nav.addEventListener('click', function(){
    nav.classList.toggle('nav-expanded');
  });
}
