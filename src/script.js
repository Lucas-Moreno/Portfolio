const home = document.querySelector('#home');
const nav = document.querySelector('#nav__left');
const bubbles = document.querySelectorAll('#bubble');


var waypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        home.classList.toggle("invisible");
    },
    offset: -330
  })
  var waypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        nav.classList.toggle("invisible");
    },
    offset: -500
  })





  