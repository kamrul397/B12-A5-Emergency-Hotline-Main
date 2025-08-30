// Heart icon functionalities
const heartCountEl = document.getElementById("heartCount");
let heartCount = parseInt(heartCountEl.innerText);
const hearts = document.querySelectorAll(".heart-btn");

hearts.forEach((heartIcon) => {
  heartIcon.addEventListener("click", () => {
    heartCount++;
    heartCountEl.innerText = heartCount;
  });
});

// Call button functionalities
let coins = 100;
const coinEl = document.getElementById("coin");
const callButtons = document.querySelectorAll("#call-btn");
const historyList = document.querySelector(".col-span-2 ul");
const clearBtn = document.querySelector(".col-span-2 button");

callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    const card = this.parentNode.parentNode;
    const texts = card.querySelectorAll(".flex.flex-col p.text-2xl");

    const serviceName = texts[0].innerText;
    const serviceNumber = texts[1].innerText;

    coins -= 20;
    alert("📞 Calling " + serviceName + " at " + serviceNumber);
    coinEl.innerText = coins;

    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center bg-gray-100 rounded-lg p-3 shadow-sm";

    const leftDiv = document.createElement("div");
    leftDiv.className = "flex flex-col";

    const nameSpan = document.createElement("span");
    nameSpan.innerText = serviceName;

    const numberSpan = document.createElement("span");
    numberSpan.className = "text-gray-800 text-sm";
    numberSpan.innerText = serviceNumber;

    leftDiv.appendChild(nameSpan);
    leftDiv.appendChild(numberSpan);

    const timeDiv = document.createElement("div");
    timeDiv.className = "text-gray-800 text-xs";
    timeDiv.innerText = now;

    li.appendChild(leftDiv);
    li.appendChild(timeDiv);

    historyList.appendChild(li);
  });
});

clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});

// Copy button functionalities
const copyButtons = document.querySelectorAll(".copy-btn");
const copyCount = document.getElementById("copy-btn-main");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let currentCount = parseInt(copyCount.innerText);
    currentCount++;
    copyCount.innerText = currentCount + " Copy";

    const card = button.closest(".card");
    const hotlineNumber = card.querySelector(".hotline-number").innerText;

    navigator.clipboard.writeText(hotlineNumber);

    alert(
      "Copy button clicked!\nNumber " + hotlineNumber + " copied to clipboard."
    );
  });
});
