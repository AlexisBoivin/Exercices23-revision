const petitLot = document.getElementById("petitLot");
const moyenLot = document.getElementById("moyenLot");
const grosLot = document.getElementById("grosLot");
const items = document.getElementsByClassName("item");

petitLot.addEventListener("click", afficherTitLot);
moyenLot.addEventListener("click", afficherMoyenLot);
grosLot.addEventListener("click", afficherGrosLot);

function afficherTitLot(e){
    for (let i = 0; i < items.length; i++)
    {
        let lot = items[i].getAttribute("data-lot");
        if (lot == "1" || lot == "2")
        {
            items[i].classList.add("hidden")
        }
    }
    
    let text = document.getElementById("texte");
    text.innerHTML = "Payez au moins 1,35 $CA pour ces 14 articles";
    grosLot.classList.remove("selected");
    moyenLot.classList.remove("selected");
    e.target.classList.add("selected");
}
function afficherMoyenLot(e){
    for (let i = 0; i < items.length; i++)
    {
        let lot = items[i].getAttribute("data-lot");
        if (lot == "1")
        {
            items[i].classList.add("hidden");
        }
        if (lot == "2")
        {
            items[i].classList.remove("hidden");
        }
    }
    
    let text = document.getElementById("texte");
    text.innerHTML = "Payez au moins 13,54 $CA pour ces 14 articles";
    petitLot.classList.remove("selected");
    grosLot.classList.remove("selected");
    e.target.classList.add("selected");
}
function afficherGrosLot(e){
    for (let i = 0; i < items.length; i++)
    {
        let lot = items[i].getAttribute("data-lot");
        if (lot == "1" || lot == "2" || lot =="3")
        {
            items[i].classList.remove("hidden");
        }
        
    }
    
    let text = document.getElementById("texte");
    text.innerHTML = "Payez au moins 24,37 $CA pour ces 14 articles";
    petitLot.classList.remove("selected");
    moyenLot.classList.remove("selected");
    e.target.classList.add("selected");
}