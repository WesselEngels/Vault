var numberContainer = document.getElementById("number-container"),
    goodAnswer = document.getElementById("good-answer"),
    wrongAnswer = document.getElementById("wrong-answer"),
    numberButtons = document.getElementsByClassName('button'),
    numberButtons1 = document.getElementsByClassName('button1'),
    greenBox = document.getElementById("green-box"),
    redBox = document.getElementById("red-box"),
    intervalTimer = 0,
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
  intervalTimer = 0;
  for(i=0; i < numberButtons.length; i++) {
    numberButtons[i].removeAttribute('disabled');
  }
  for(i=0; i < numberButtons1.length; i++) {
    numberButtons1[i].removeAttribute('disabled');
  }
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
    for(i=0; i < numberButtons.length; i++) {
      numberButtons[i].setAttribute('disabled', 'disabled');
    }
    for(i=0; i < numberButtons1.length; i++) {
      numberButtons1[i].setAttribute('disabled', 'disabled');
    }
    if (numberOne == 3 && numberTwo == 1 && numberThree == 1) {
      document.getElementById("good-answer").innerHTML = "You guessed it right!";

      var blink = setInterval(function() {

      	//add +1 every time the setinterval function runs
      	intervalTimer++;

      	//method to show div on and off
      	//change the css of the green and red box to create a blinking effect
      	if (greenBox.style.visibility == 'hidden') {
      		greenBox.style.visibility = 'visible';
      	}else {
      		greenBox.style.visibility = 'hidden';
      	}

      	//check if the interval has runned ten times
      	if(intervalTimer == 6) {

      		//ClearInterval function stops the interval after 10 times
      		clearInterval(blink);
          resetValues();
      	}

      }, 500);
    }
    else {
      document.getElementById("wrong-answer").innerHTML = "Wrong Code, Try Again!";

      var blink = setInterval(function() {

      	//add +1 every time the setinterval function runs
      	intervalTimer++;

      	//method to show div on and off
      	//change the css of the green and red box to create a blinking effect
      	if (redBox.style.visibility == 'hidden') {
      		redBox.style.visibility = 'visible';
      	}else {
      		redBox.style.visibility = 'hidden';
      	}

      	//check if the interval has runned ten times
      	if(intervalTimer == 6) {

      		//ClearInterval function stops the interval after 10 times
      		clearInterval(blink);
          resetValues();
      	}

      }, 500);
    }
  }
}



//counter start at zero




//counter start at zero
