// This array contains the coordinates for all bus stops between MIT and Harvard
const wayPoints = [
  [114.17372, 22.28001], //central plaza
  [114.173611, 22.280607], //street access
  [114.168880, 22.280806], //Fenwick Pier
  [114.159204, 22.282510], //Connaught Road
  [114.153389, 22.286957], //Sheung Wan
  [114.145582, 22.288895], //fly over Sai Ying Pun abeam Sun Yat Sen
  [114.132219, 22.287059], //near Kennedy Town Swimming pool

];



// TODO: add a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= wayPoints.length) return;
    marker.setLngLat(wayPoints[counter]);
    counter++;
    move();
  }, 700);
}

