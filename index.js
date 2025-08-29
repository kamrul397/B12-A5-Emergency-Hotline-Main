// heart icon functionalities
const heartCountEl = document.getElementById("heartCount");
let heartCount = heartCountEl.innerText;
const hearts = document.querySelectorAll(".heart-btn");

hearts.forEach((heartIcon) => {
  heartIcon.addEventListener("click", () => {
    heartCount++;
    heartCountEl.innerText = heartCount;
  });
});

// call btn functionalities

var coins = 100;

var coinEl = document.getElementById("coin");

var callButtons = document.querySelectorAll("#call-btn");

for (var i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Parent card
    var card = this.parentNode.parentNode;

    // Get all <p> elements in the card's content section
    var texts = card.querySelectorAll(".flex.flex-col p.text-2xl");

    var serviceName = texts[0].innerText; // first p is service name
    var serviceNumber = texts[1].innerText; // second p is number

    coins -= 20;

    alert("📞 Calling " + serviceName + " at " + serviceNumber);
    coinEl.innerText = coins;
  });
}
