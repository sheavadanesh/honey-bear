var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiYnZzaWxsb3JlcXVleiIsImEiOiJja2NkeXR2NmUwMzk0Mnhxcmp6Y3NtemlhIn0.wYA446cFI5ZFfotqtbw_Sw";
var map = new mapboxgl.Map({
  container: "YOUR_CONTAINER_ELEMENT_ID",
  style: "mapbox://styles/mapbox/streets-v11",
});
