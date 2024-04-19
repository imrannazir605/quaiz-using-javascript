const questions = [{
    'que' :   "You re 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
    'A' : "1st",
    'B' : "2nd",
    'C' : "3rd",
    'D' : "Non of the Above",
    'correct' : "3rd"
},  
{
   'que' : "How many months have 28 days?",
   'A' : "2",
   'B' : "1",
   'C' : "All of them",
   'D' : "Depends if there's a leap year or not",
   'correct' : "C"
},
{
    "que" : "How many 0.5cm slices can you cut from a bread that is 25cm long? ",
    "A" : "50",
    "B" : "25",
    "C" : "29",
    "D" : "Non of the Above",
    "Correct" : "50",
}
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options")
const loadquestions = () => {
    reset();
   const data = questions[index]
//    console.log(data);
  quesBox.innerText = ` ${index + 1}) ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.A;
  optionInput[1].nextElementSibling.innerText = data.B;
  optionInput[2].nextElementSibling.innerText = data.C;
  optionInput[3].nextElementSibling.innerText = data.D;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer();
    if(ans === data.correct){
       right++;
    }else{
        wrong++;
    }
    index++;
    loadquestions();

    return;
}
const getAnswer = () => {
    optionInput.forEach(
        (input) => {
            if(input.checked){
                return input.value;
            }
        }
    )
}

const reset = () => {
    optionInput.forEach(
        (input) => { 
            input.checked = false;
        })   
}


loadquestions();