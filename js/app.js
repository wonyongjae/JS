const outButton = document.querySelector("form button");

function onGetRandomNumber(event) {
  event.preventDefault();
  const results = document.querySelector("#results");
  const result = document.querySelector("#result");
  const max = document.querySelector("#max");
  const yourChose = document.querySelector("#chose");
  const machineChose = Math.ceil(Math.random() * max.value);

  if (parseInt(max.value) < 0 || parseInt(yourChose.value) < 0) {
    results.innerHTML = "Negative numbers are not allowed!";
    result.innerHTML = "Enter a number higher than zero!";
  } else if (parseInt(yourChose.value) > parseInt(max.value)) {
    // console.log("Guess Number too high!")
    results.innerHTML = "Guess Number too high!";
    result.innerHTML = "Please. Enter a lower number!";
  } else {
    // document.getElementById("#result").style.visibility = "visible";
    results.innerHTML = `You chose: ${yourChose.value}, the machine chose: ${machineChose}.`;

    if (parseInt(yourChose.value) === machineChose) {
      result.innerHTML = "You win!";
    } else {
      result.innerHTML = "You lose!";
    }
    // console.log(max.value);
    // console.log(yourChose.value);
  }
}

outButton.addEventListener("click", onGetRandomNumber);
