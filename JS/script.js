let form = document.querySelector(".js-form");
let amount = document.querySelector(".js-amount");
let exchangedCurrency = document.querySelector(".js-exchangedCurrency");
let exchangeRate = document.querySelector(".js-exchangeRate");
let finalResult = document.querySelector(".js-finalResult");
let finalAmount = document.querySelector(".js-finalAmount");
let finalCurrency = document.querySelector(".js-finalCurrency");
let finalParagraphCorrect = document.querySelector(".js-finalParagraphCorrect");
let finalParagraphFaulty = document.querySelector(".js-finalParagraphFaulty");

amount.addEventListener("blur", () => {
   amount.classList.add("interacted");
});

exchangedCurrency.addEventListener("input", () => {
   switch (exchangedCurrency.value) {
      case "EUR":
         exchangeRate.value = 4.55;
         break;
      case "USD":
         exchangeRate.value = 3.89;
         break;
      case "GBP":
         exchangeRate.value = 5.35;
         break;
      case "CHF":
         exchangeRate.value = 4.24;
         break;
      default:
         exchangeRate.value = "";
   }
});

form.addEventListener("reset", () => {
   finalParagraphCorrect.style.display = "none";
   finalParagraphFaulty.style.display = "none";
   amount.classList.remove("interacted");
});

form.addEventListener("submit", (event) => {
   event.preventDefault();
   let result = amount.value / exchangeRate.value;
   if (exchangedCurrency.value !== "currencySelect") {
      finalParagraphFaulty.style.display = "none";
      finalParagraphCorrect.style.display = "block";
      finalAmount.innerText = amount.value;
      finalResult.innerText = result.toFixed(2);
      finalCurrency.innerText = exchangedCurrency.value;
   } else {
      finalParagraphFaulty.style.display = "block";
      finalParagraphCorrect.style.display = "none";
   }
});
