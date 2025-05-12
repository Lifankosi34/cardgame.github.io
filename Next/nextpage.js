
const suit = localStorage.getItem("chosenSuit");
if (suit) {
  $(".p1").text(`You chose ${suit},interesting choice!`);
  $(".p2").text(`Now, dont think of ${suit} randomly choose a direction.`);
  
} else {
  $(".p1").text("You didn't choose a suit!");
}
document.querySelector(".left").addEventListener("click", function(){
    window.location.href = "numberstep.html";
})
document.querySelector(".right").addEventListener("click", function(){
    window.location.href = "facestep.html";
})


