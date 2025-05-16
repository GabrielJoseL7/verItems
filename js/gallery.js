const tituloSection1 = document.getElementById("tituloSection1");
const closeGallery1 = document.getElementById("close1");
const galleryContainer1 = document.getElementById("gallery-container1");

tituloSection1.addEventListener("click", function(){ 
    galleryContainer1.style.display = "grid";
})

closeGallery1.addEventListener("click", function(){
    galleryContainer1.style.display = "none";
})

const tituloSection2 = document.getElementById("tituloSection2");
const closeGallery2 = document.getElementById("close2");
const galleryContainer2 = document.getElementById("gallery-container2");

tituloSection2.addEventListener("click", function(){ 
    galleryContainer2.style.display = "grid";
})

closeGallery2.addEventListener("click", function(){
    galleryContainer2.style.display = "none";
})