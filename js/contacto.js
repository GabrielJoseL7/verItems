const sent = document.getElementById("sent");
const modal = document.getElementById("modal");

sent.addEventListener("click", function(){
    modal.classList.add("modalView")
})

const cerrar = document.getElementById("close");

cerrar.addEventListener("click", function(){
    modal.classList.remove("modalView")
})