{
   const amountElement = document.querySelector(".js-amount");
   const exchangedCurrencyElement = document.querySelector(".js-exchangedCurrency");
   const exchangeRateElement = document.querySelector(".js-exchangeRate");
   const finalParagraphCorrectElement = document.querySelector(".js-finalParagraphCorrect");
   const finalParagraphFaultyElement = document.querySelector(".js-finalParagraphFaulty");

   const addClass = () => {
      amountElement.classList.add("interacted");
   };

   const getRate = () => {
      const exchangedCurrency = exchangedCurrencyElement.value;

      switch (exchangedCurrency) {
         case "EUR":
            return 4.55;
         case "USD":
            return 3.89;
         case "GBP":
            return 5.35;
         case "CHF":
            return 4.24;
         default:
            return "";
      }
   };

   const showRate = () => {
      exchangeRateElement.value = getRate();
   };

   const resetForm = () => {
      finalParagraphCorrectElement.style.display = "none";
      finalParagraphFaultyElement.style.display = "none";
      amountElement.classList.remove("interacted");
   };

   const showResultText = (event) => {
      event.preventDefault();

      const finalCurrencyElement = document.querySelector(".js-finalCurrency");
      const finalResultElement = document.querySelector(".js-finalResult");
      const finalAmountElement = document.querySelector(".js-finalAmount");

      const amount = amountElement.value;
      let result = amount / exchangeRateElement.value;

      if (exchangedCurrencyElement.value !== "currencySelect") {
         finalParagraphFaultyElement.style.display = "none";
         finalParagraphCorrectElement.style.display = "block";
         finalAmountElement.innerText = amount;
         finalResultElement.innerText = result.toFixed(2);
         finalCurrencyElement.innerText = exchangedCurrencyElement.value;
      } else {
         finalParagraphFaultyElement.style.display = "block";
         finalParagraphCorrectElement.style.display = "none";
      }
   };

   const init = () => {
      const formElement = document.querySelector(".js-form");
      amountElement.addEventListener("blur", addClass);
      exchangedCurrencyElement.addEventListener("input", getRate);
      exchangedCurrencyElement.addEventListener("input", showRate);
      formElement.addEventListener("reset", resetForm);
      formElement.addEventListener("submit", showResultText);
   };

   init();
}