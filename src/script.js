const home = document.querySelector('#home');
const nav = document.querySelector('#nav__left');


var waypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        home.classList.toggle("invisible");
    },
    offset: -370
  })
  var waypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        nav.classList.toggle("invisible");
    },
    offset: -500
  })
