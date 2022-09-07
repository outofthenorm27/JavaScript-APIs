// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: "8,380,000"

},
{
  location: [41.881832, -87.623177],
  name: "Chicago",
  population: "2,699,000"

},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: "2,313,000"

},
{
  location: [34.0522, -118.2437],
  name: "LA",
  population: "3,973,000"

},
{
  location: [41.2565, -95.9345],
  name: "Omaha",
  population: "479,529"

},
]

// console.log(cities)
// Add code to create a marker for each city below and add it to the map

// newyork;
// chicago;
// houston; 29.7604, -95.3698 2,313,000
// la; 34.0522, -118.2437 3,973,000
// omaha; 41.2565, -95.9345 479,529

// Loop through the cities array
cities.forEach(city =>   L.marker(city.location)
.bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
.addTo(myMap)
);