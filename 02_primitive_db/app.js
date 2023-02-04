import inquirer from "inquirer";
import { listContacts, addContact } from "./dbOperations.js";

const startQuestions = [
  {
    type: "input",
    name: "userName",
    message: "Enter thr user`s name. To cancel press ENTER ",
    default: "Enter",
  },
];

const questions = [
  {
    type: "rawlist",
    name: "userGender",
    message: "Enter thr user`s gender ",
    choices: ["male", "female"],
  },
  {
    type: "input",
    name: "userAge",
    message: "Enter thr user`s age ",
    validate: function (value) {
      const pass = value.match(/^\d+$/);
      if (!pass) {
        return "Enter a number";
      }
      return true;
    },
  },
];

const displayDbQuestions = [
  {
    type: "confirm",
    name: "confirmDisplayDb",
    message: "Do u want to display DB Data ? ",
    default: "Yes",
  },
];

const searchForUserOptions = [
  {
    type: "input",
    name: "userName",
    message: "Enter thr user`s name u wanna find ?",
  },
];

const addUserStep = (name) => {
  inquirer.prompt(questions).then(async ({ userGender, userAge }) => {
    await addContact(name, userGender, userAge);
    startPrompt();
  });
};

const displayDbStep = () => {
  inquirer.prompt(displayDbQuestions).then(async ({ confirmDisplayDb }) => {
    if (confirmDisplayDb) {
      console.log(await listContacts());
      searchForUserStep();
    }
    return;
  });
};

const searchForUserStep = () => {
  inquirer.prompt(searchForUserOptions).then(async ({ userName }) => {
    const users = await listContacts();
    const userFindRes =
      users.find((item) => item.user === userName) ??
      "User wasn`t found, try again";
    return console.log(userFindRes);
  });
};

const startPrompt = () => {
  inquirer.prompt(startQuestions).then(({ userName }) => {
    if (userName.toLowerCase() !== "enter") {
      addUserStep(userName);
    } else {
      displayDbStep();
    }
  });
};

startPrompt();
