// imports at the top
const prompt = require('prompt-sync')();

//Helper functions
const welcomeAndGetName = () => {
    console.log("Welcome!");
    const name = prompt("What is your name: ");
    return name;
}

const showOptions = () => {
console.log("Here are your options:");
console.log("1 - play a guessing game");
console.log("2 - words of wisdom");
console.log("3 - cheer you on!");
console.log("Any other key - exit");
}

const sayGoodbye = (givenName) => {
    console.log(`Goodbye, ${givenName}`)
}

const getUserNumber = () => {
    const option = prompt(Number());
    return option
}

// Primary runner function
const main = () => {
  const name =welcomeAndGetName();
  console.log(`Hello ${name}, nice to meet you!`)
  showOptions();
  const option = getUserNumber().trim();
  console.log(option)
  sayGoodbye(name);
};
main();