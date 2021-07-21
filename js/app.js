'use strict'

let correctguesses = 0;
let username = prompt('What\'s your name?');

alert('Hello ' + username + '. Glad to have you here.');

//Question 1 
function questionOne(){
  let answerTime = prompt('Do you have time to take a short quiz about me? Answer \'Yes\'\ or \'No\'').toLowerCase();

  //console.log('Do they have time to answer questions ' + answerTime);
  if (answerTime === 'yes' || answerTime === 'y'){
    alert('Thank you for answering Yes, let\'s get started!');
    correctguesses++;

  } else if (answerTime === 'no' || answerTime === 'n'){
    alert('Since you don\'t have time, please come back another time!');
  } else {
    alert('Please answer with Yes or No');
  }
}
questionOne();

//Question 2
function questionTwo(){
  let answerOne = prompt('Am I from Pasco, WA? Answer \'Yes\'\ or \'No\'').toLowerCase();

  //console.log('Do they know where I\'m from?: ' + answerOne);
  if (answerOne === 'yes' || answerOne === 'y'){
    alert('Yes! I am from Pasco, WA');
    correctguesses++;

  } else if (answerOne === 'no' || answerOne === 'n'){
    alert('It\'s true...I was born and raised in Pasco, WA');
  } else {
    alert('Please answer with Yes or No');
  }
}
questionTwo();

//Question 3
function questionThree(){
  let answerFamily = prompt('Am I the youngest of 5 kids? Answer \'Yes\' or \'No\'').toLowerCase();

  //console.log('Do they know if I'm youngest in family?: ' + answerFamily);
  if (answerFamily === 'yes' || answerFamily === 'y'){
    alert('You are correct!');
    correctguesses++;

  } else if (answerFamily === 'no' || answerFamily === 'n'){
    alert('It\'s true, I am the youngest!');
  } else {
    alert('Please answer with Yes or No');
  }
}
questionThree();

//Question 4
let answerFood = prompt('Are cheesburgers my favorite food? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they know my favorite food: ' + answerFood);
if (answerFood === 'yes' || answerFood === 'y'){
    alert('You are correct! Who doesn\'t love a cheeseburger?');
    correctguesses++;

} else if (answerFood === 'no' || answerFood === 'n'){
    alert('You are incorrect, I love me a big cheesy cheesburger');
} else {
    alert('Please answer with Yes or No');
}

//Question 5
let answerFriend = prompt('Do you want to be friends? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they want to be friends: ' + answerFriend);
if (answerFriend === 'yes' || answerFriend === 'y'){
    alert('Thanks for saying Yes! I love making new friends!');
    correctguesses++;

} else if (answerFriend === 'no' || answerFriend === 'n'){
    alert('Since you said No, go away!');
} else {
    alert('Please answer with Yes or No');
}

//Question 6
let johnnyNephews = 7;
let attempts = 4;
 
while (attempts) {
    for (let i=0; i < 4; i++) {
    
    let answerNephews = +prompt ('Can you guess how many nephews I have?'); {
        console.log (`How many nephews do they think I have: ${answerNephews}`);
    }

    if (answerNephews === johnnyNephews) {
      attempts = 0;
      alert ('You got it!');
      correctguesses++;
      break;

  } else if (answerNephews < johnnyNephews) {
    attempts--;
      alert (`You are too low! You have have ${attempts} guesses left`);
           
 } else if (answerNephews > johnnyNephews){
    attempts--; 
    alert (`You are too high! You have ${attempts} guesses left`);
    
    } if (attempts === 0 && answerNephews !== johnnyNephews) {
      alert (`Since there are no guess left, I have 7 nephews!`);
  } 
}



//Question 7
let johnnyCandy = ['snickers', 'kit kat', 'skittles'];
let attemptsCandy = 6;

while (attemptsCandy) {
    for (let i = 0; i < 6; i++) {
    
    let answerCandy = prompt('What are my favorite candy?'); {
        console.log(`Guess of Johnny's favorite candy: ${answerCandy}`);
    }
    
    
    
    if (answerCandy === johnnyCandy[i]){
    attemptsCandy = 0;
    alert('You are correct!');
    correctguesses++;
    break;
    }
    
    else if (answerCandy !== johnnyCandy[i]){
    attemptsCandy--; 
    alert(`That is not one of my favorite candies. You have ${attemptsCandy} attempts remaining.`);
    }  
    
    if (attemptsCandy === 0 && answerCandy !== johnnyCandy[i]){
        alert(`My favorite candy are: ${johnnyCandy}`);
        }
       break;
    }  
}
}
alert('Hope you learned some fun facts about me, ' + username);
alert(`You got ${correctguesses} out of 7 correct!`)
