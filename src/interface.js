let button = document.querySelector(".generate");
let quoteDisplay = document.querySelector(".final-quote");
let select = document.querySelector(".mood-select"); // Added line to select the mood input

button.addEventListener("click", generateQuote);

function generateQuote(event) {
  event.preventDefault();

  let apiKey = "9387af763ce4b20bcfo1t37b0bacd41e";
  let prompt = `Give me a ${select.value} quote.`; // Updated line to use the value from the mood input
  let context =
    "You are a helpful assistant that generates quotes based on the user's mood.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${encodeURIComponent(apiKey)}`;

  axios
    .get(apiURL)
    .then(function (response) {
      if (response.data && response.data.answer) {
        quoteDisplay.textContent = response.data.answer.trim();
      } else {
        quoteDisplay.textContent = "No quote received. Please try again.";
      }
    })
    .catch(function (error) {
      console.error("Error occurred:", error);
      quoteDisplay.textContent = "Unable to load quote. Please try again.";
    });
}
