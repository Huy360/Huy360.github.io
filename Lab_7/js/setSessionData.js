const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busRoute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
        sessionStorage.setItem("routeItem", JSON.stringify(route));
        let title = route.title;
        let latMax = route.latMax;
        let latMin = route.latMin;
        let lonMax = route.lonMax;
        let lonMin = route.lonMin;

      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
