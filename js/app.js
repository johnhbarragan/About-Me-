'use strict'

let username = prompt('What\'s your name?');

alert('Hello ' + username);

let answerTime = prompt('Do you have time to answer a couple of questions? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they have time to answer questions ' + answerTime);
if (answerTime === 'yes' || answerTime === 'y'){
    alert('Thank you for answering Yes, let\'s get started!');

} else if (answerTime === 'no' || answerTime === 'n'){
    alert('Since you don\'t have time, please come back another time!');
}

let answerOne = prompt('Can you guess where I\'m from? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they know where I\'m from?: ' + answerOne);
if (answerOne === 'yes' || answerOne === 'y'){
    alert('You know so much about me already!');

} else if (answerOne === 'no' || answerOne === 'n'){
    alert('NO? I\'ll give you a hint, I\'m from Eastern Washington');
}

let answerFood = prompt('Can you guess my favorite food? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they know my favorite food: ' + answerFood);
if (answerFood === 'yes' || answerFood === 'y'){
    alert('How did you know I loved cheeseburgers?');

} else if (answerFood === 'no' || answerFood === 'n'){
    alert('Since you said no, I\'ll tell you: Cheeseburgers!');
}

let answerFriend = prompt('Do you want to be friends? Answer \'Yes\'\ or \'No\'').toLowerCase();

//console.log('Do they want to be friends: ' + answerFriend);
if (answerFriend === 'yes' || answerFriend === 'y'){
    alert('Thanks for saying Yes! I love making new friends!');

} else if (answerFriend === 'no' || answerFriend === 'n'){
    alert('Since you said No, go away!');
}