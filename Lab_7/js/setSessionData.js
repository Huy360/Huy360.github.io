const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busRoute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here
    console.log(busRouteURL);

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
        let title = route.title;
        let lat_max = route.lat_max;
        let lat_min = route.lat_min;
        let lon_max = route.lon_max;
        let lon_min = route.lon_min;

        sessionStorage.setItem("title", title);
        sessionStorage.setItem("lat_max", latMax);
        sessionStorage.setItem("lat_min", latMin);
        sessionStorage.setItem("lon_max", lonMax);
        sessionStorage.setItem("lon_min", lonMin);

      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
