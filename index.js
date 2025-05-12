
document.querySelector(".spades").addEventListener("click", function(){
    localStorage.setItem("chosenSuit", "spades");
    window.location.href = "../Next/nextpage.html";

})
document.querySelector(".hearts").addEventListener("click", function(){
    localStorage.setItem("chosenSuit", "hearts");
    window.location.href = "../Next/nextpage.html";
})
document.querySelector(".diamonds").addEventListener("click", function(){
    localStorage.setItem("chosenSuit", "diamonds");
    window.location.href = "../Next/nextpage.html";

})
document.querySelector(".clubs").addEventListener("click", function(){
    localStorage.setItem("chosenSuit", "clubs");
    window.location.href = "../Next/nextpage.html";

})
window.addEventListener("load", () => {
  localStorage.clear(); // Wipes everything saved for this domain
});