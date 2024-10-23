//Event Listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

//Global variables
var score = 0;
var attempts = localStorage.getItem( "total_attempts");

displayQ4Choices();
displayQ9Choices();

//Functions
function isFormValid() {
  let isValid=true;
  if(document.querySelector("#q1").value == "") {
    isValid = false;
    document.querySelector("#validationFdbk").innerHTML = "Question 1 was not answered";
  }
  return isValid;
}//isFormValid

function rightAnswer(index) {
  document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
  document.querySelector(`#q${index}Feedback`).className = "bg-success text-white";
  document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='checkmark'>";
  score += 10;
}

function wrongAnswer(index) {
  document.querySelector(`#q${index}Feedback`).innerHTML = "Incorrect!";
  document.querySelector(`#q${index}Feedback`).className = "bg-warning text-white";
  document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/xmark.png' alt='xmark'>";
}

function displayQ4Choices() {
  let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
  q4ChoicesArray = _.shuffle(q4ChoicesArray);
  for (let i = 0; i < q4ChoicesArray.length; i++) {
    document.querySelector("#q4Choices").innerHTML += ` <input type="radio" name="q4" id= "${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`;
  }
} //displayChoices

function displayQ9Choices() {
  let q9ChoicesArray  = ["Lake Tahoe", "Lake Superior", "Lake Michigan", "Great Salt Lake"];
  q9ChoicesArray = _.shuffle(q9ChoicesArray);
  for (let i = 0; i < q9ChoicesArray.length; i++) {
    document.querySelector("#q9Choices").innerHTML += ` <input type="radio" name="q9" id= "${q9ChoicesArray[i]}" value="${q9ChoicesArray[i]}"> <label for="${q9ChoicesArray[i]}"> ${q9ChoicesArray[i]}</label>`;
  }
}

function gradeQuiz() {
  console.log("Grading quiz...");
  document.querySelector("#validationFdbk").innerHTML = ""; // resets validation feedback
  if(!isFormValid()) {
    return;
  }

  //variables
  score = 0;  
  let q1Response = document.querySelector("#q1").value.toLowerCase();
  let q2Response = document.querySelector("#q2").value;
  let q4Response = document.querySelector("input[name=q4]:checked").value;
  let q5Response = document.querySelector("#q5").value;
  let q6Response = document.querySelector("#q6").value.toLowerCase();
  let q9Response = document.querySelector("input[name=q9]:checked").value;
  let q10Response = document.querySelector("#q10").value.toLowerCase();
  
  //Grading question 1
  if(q1Response == "sacramento") {
    rightAnswer(1);
  }
  else {
    wrongAnswer(1);
  }

  //Grading question 2
  if(q2Response == "mo") {
    rightAnswer(2);
  }
  else {
    wrongAnswer(2);
  }

  //Grading question 3
  if(document.querySelector("#Jefferson").checked && document.querySelector("#Roosevelt").checked && !document.querySelector("#Jackson").checked && !document.querySelector("#Franklin").checked) {
    rightAnswer(3);
  }
  else {
    wrongAnswer(3);
  }

  //Grading question 4
  if(q4Response == "Rhode Island") {
    rightAnswer(4);
  } else {
    wrongAnswer(4);
  }

  //Grading question 5
  if(q5Response == "co") {
    rightAnswer(5);
  } else {
    wrongAnswer(5);
  }

  //Grading question 6
  if(q6Response == "alaska") {
    rightAnswer(6);
  } else {
    wrongAnswer(6);
  }

  //Grading question 7
  if(document.querySelector("#Nevada").checked && document.querySelector("#Oregon").checked && document.querySelector("#Arizona").checked && !document.querySelector("#Idaho").checked) {
    rightAnswer(7);
  }
  else {
    wrongAnswer(7);
  }

  //Grading question 8
  if(document.querySelector("#Sacramento").checked && document.querySelector("#American").checked && !document.querySelector("#Trinity").checked && !document.querySelector("#Consumnes").checked) {
    rightAnswer(8);
  }
  else {
    wrongAnswer(8);
  }

  //Grading question 9
  if(q9Response == "Lake Michigan") {
    rightAnswer(9);
  } else {
    wrongAnswer(9);
  }

  //Grading question 10
  if(q10Response == "pacific" || q10Response == "pacific ocean") {
    rightAnswer(10);
  } else {
    wrongAnswer(10);
  }
  
  //Display Green if 80 and Red if less than 80
  if(score >= 80) {
    document.querySelector("#totalScore").className = "text-success";
    document.querySelector("#congratsMsg").innerHTML = "Congratulations! You passed the quiz!";
    document.querySelector("#congratsMsg").className = "bg-success text-white";
  } else {
    document.querySelector("#totalScore").className = "text-danger";
  }

  //Display total score and number of attempts
  document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;
  document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`;
  localStorage.setItem("total_attempts", attempts);
}//gradeQuiz