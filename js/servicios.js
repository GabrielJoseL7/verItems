const flavors = document.getElementById("sabores");
const saboresList = document.getElementById("sabores-list");
const close = document.getElementById("sabores1");

flavors.addEventListener("click", function() {
  saboresList.style.display = "flex";
});

close.addEventListener("click", function(){
    saboresList.style.display = "none"
})

const containers = document.getElementById("contenedores");
const containersClose = document.getElementById("contenedores1");
const containersList = document.getElementById("contenedores-list");

containers.addEventListener("click", function() {
  containersList.style.display = "flex";
});

containersClose.addEventListener("click", function(){
    containersList.style.display = "none"
})

const servicios = document.getElementById("servicios");
const serviciosClose = document.getElementById("servicios1");
const serviciosList = document.getElementById("servicios-list");

servicios.addEventListener("click", function() {
  serviciosList.style.display = "flex";
});

serviciosClose.addEventListener("click", function(){
    serviciosList.style.display = "none"
})