var numberContainer = document.getElementById("number-container"),
    goodAnswer = document.getElementById("good-answer"),
    wrongAnswer = document.getElementById("wrong-answer"),
    clickCounter = 0,
    numberOne,
    numberTwo,
    numberThree;

function resetValues() {
  numberContainer.innerHTML = "";
  goodAnswer.innerHTML = "";
  wrongAnswer.innerHTML = "";
  clickCounter = 0;
  numberOne = 0;
  numberTwo = 0;
  numberThree = 0;
}

function getNumber(button) {
  // console.log(button.value);
  clickCounter++;
  numberContainer.innerHTML += button.value;

  if (clickCounter == 1) {
    numberOne = button.value;
  } else if (clickCounter == 2) {
    numberTwo = button.value;
  }
  else {
    numberThree = button.value;
  }

  if (clickCounter == 3) {

    if (numberOne == 3 && numberTwo == 1 && numberThree == 1) {
      document.getElementById("good-answer").innerHTML = "You guessed it right!";
      setTimeout(function(){ resetValues() }, 2500);
    }
    else {
      document.getElementById("wrong-answer").innerHTML = "Wrong Code, Try Again!";
      setTimeout(function(){ resetValues() }, 2500);
    }
  }
}
