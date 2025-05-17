const geo = document.getElementById("geo");
const GeoDetails = document.getElementById("GeoDetails");
const clock = document.getElementById("clock");
const clockDetails = document.getElementById("clockDetails");
const phone = document.getElementById("phone");
const phoneDetails = document.getElementById("phoneDetails");

geo.addEventListener("click", function() {
  if (GeoDetails.classList.contains("modalClass")) {
    GeoDetails.classList.remove("modalClass");
  } else {
    GeoDetails.classList.add("modalClass");
  }
});

clock.addEventListener("click", function() {
  if (clockDetails.classList.contains("modalClass")) {
    clockDetails.classList.remove("modalClass");
  } else {
    clockDetails.classList.add("modalClass");
  }
});



phone.addEventListener("click", function() {
  if (phoneDetails.classList.contains("modalClass")) {
    phoneDetails.classList.remove("modalClass");
  } else {
    phoneDetails.classList.add("modalClass");
  }
});