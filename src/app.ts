const form = document.querySelector("form")!;
const address = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = address.value;

  // send this to Google's API!
}

form.addEventListener("submit", searchAddressHandler);
