function buyBike() {
  setTimeout(
    function () {
      console.log("Bought Royal Enfield Himalayan")
    }, 2000);
    planTrip()
}

function planTrip() {
  setTimeout(
    function () {
      console.log("Trip to Ladakh planned")
    }, 1000);
}

buyBike()



