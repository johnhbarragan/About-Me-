'use strict'

let username = prompt('What\'s your name?');

alert('Hello ' + username + '. Glad to have you here.');

let answerTime = prompt('Do you have time to take a short quiz about me? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they have time to answer questions ' + answerTime);
if (answerTime === 'yes' || answerTime === 'y'){
    alert('Thank you for answering Yes, let\'s get started!');

} else if (answerTime === 'no' || answerTime === 'n'){
    alert('Since you don\'t have time, please come back another time!');
} else {
    alert('Please answer with Yes or No');
}

let answerOne = prompt('Am I from Pasco, WA? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they know where I\'m from?: ' + answerOne);
if (answerOne === 'yes' || answerOne === 'y'){
    alert('Yes! I am from Pasco, WA');

} else if (answerOne === 'no' || answerOne === 'n'){
    alert('It\'s true...I was born and raised in Pasco, WA');
} else {
    alert('Please answer with Yes or No')
}
let answerFamily = prompt('Am I the youngest of 5 kids? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they know if I'm youngest in family?: ' + answerFamily);
if (answerFamily === 'yes' || answerFamily === 'y'){
    alert('You are correct!');

} else if (answerFamily === 'no' || answerFamily === 'n'){
    alert('It\'s true, I am the youngest!');
} else {
    alert('Please answer with Yes or No');
}

let answerFood = prompt('Are cheesburgers my favorite food? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they know my favorite food: ' + answerFood);
if (answerFood === 'yes' || answerFood === 'y'){
    alert('You are correct! Who doesn\'t love a cheeseburger?');

} else if (answerFood === 'no' || answerFood === 'n'){
    alert('You are incorrect, I love me a big cheesy cheesburger');
} else {
    alert('Please answer with Yes or No');
}

let answerFriend = prompt('Do you want to be friends? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they want to be friends: ' + answerFriend);
if (answerFriend === 'yes' || answerFriend === 'y'){
    alert('Thanks for saying Yes! I love making new friends!');

} else if (answerFriend === 'no' || answerFriend === 'n'){
    alert('Since you said No, go away!');
} else {
    alert('Please answer with Yes or No');
}

let johnnyNephews = 7;
let attempts = 4;
 
while (attempts){
for (let i=0; i < attempts; i+1) {
    let answerNephews = +prompt ('Can you guess how many nephews I have?');{
        console.log (`Guess of Johnny's nephews: ${answerNephews}`);

  } if (answerNephews === johnnyNephews) {
      alert ('You got it!');
      break;

  } else if (answerNephews < johnnyNephews) {
    attempts--;
      alert (`You are too low! You have have ${attempts} guesses left`);
           
 } else if (answerNephews > johnnyNephews){
    attempts--; 
    alert (`You are too high! You have ${attempts} guesses left`);
    
    } if (attempts === 0) {
      alert (`Since there are no guess left, I have 7 nephews!`);
  } 
}

let johnnyCandy = ['snickers', 'kit kat', 'skittles'];
let attemptsCandy = 5;

while (attemptsCandy) {
    let answerCandy = prompt('What are my favorite candy?'); {
        console.log(`Guess of Johnny's favorite candy: ${answerCandy}`);
    }
    for (let i = 0; i < attemptsCandy; i+1) {
    
    if (answerCandy === johnnyCandy[i]){
    attemptsCandy = 0;
    alert('You are correct!');
    break;
    }

    else if (answerCandy !== johnnyCandy[i]){ 
    alert(`That is not one of my favorite candies. You have ${attemptsCandy} attempts remaining.`);
    answerCandy = prompt(`Can you try another candy?`);
    attemptsCandy--;
    }  
    
  if (attemptsCandy === 0 && answerCandy !== johnnyCandy[i]){
    alert(`My favorite candy are: ${johnnyCandy}`);
    }
  else if (answerCandy === johnnyCandy[i]){
    alert('PHEW! You got one! Can you name another?');
  } break;
} 
}

alert('Hope you learned some fun facts about me, ' + username);
}