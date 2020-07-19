// Question 8:--------
// Replace Function Expressions with arrow functions in the code below:
// function ask(question, yes, no) {
// if (confirm(question)) yes()
// else no()
// }

let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
'Do you agree?',
() => console.log('You agreed'),
() => console.log('You interrupted execution'),
);