const { type } = require("os");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkArrayType = (arr) => {
  const numCount = arr.reduce(
    (acc, current) => (current.match(/^\d+$/) ? acc + 1 : acc),
    0
  );
  if (numCount === 0 || numCount === arr.length) {
    return true;
  } else {
    return false;
  }
};

const game = () => {
  rl.question("Enter an array of values: ", (value) => {
    const values = value.split(" ");
    if (checkArrayType(values)) {
      rl.question(
        "Enter the number of the operation you want to perform with the array of elements: ",
        (operation) => {
          switch (operation) {
            case "a":
              console.log(values.sort((a, b) => a.localeCompare(b)));
              return game();
            case "b":
              console.log(values.sort((a, b) => a - b));
              return game();
            case "c":
              console.log(values.sort((a, b) => b - a));
              return game();
            case "d":
              console.log(values.sort((a, b) => b.length - a.length));
              return game();
            case "f":
              console.log(Array.from(new Set(values)));
              return game();
            case "e":
              console.log(Array.from(new Set(values)));
              return game();
            case "exit":
              console.log("Bye bye !");
              return rl.close();
            default:
              "Command undefined";
              return game();
          }
        }
      );
    } else {
      console.log("Elements in Array must be same type !");
      game();
    }
  });
};

game();
