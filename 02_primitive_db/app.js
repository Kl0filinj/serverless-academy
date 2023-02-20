import inquirer from "inquirer";
import { listContacts, addContact } from "./dbOperations.js";
import {
  displayDbQuestions,
  searchForUserQuestions,
  startQuestions,
  userInfoQuestions,
} from "./questions.js";

const addUserStep = (name) => {
  inquirer.prompt(userInfoQuestions).then(async ({ userGender, userAge }) => {
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
  inquirer.prompt(searchForUserQuestions).then(async ({ userName }) => {
    const users = await listContacts();
    const userFindRes =
      users.find(
        (item) => item.user.toLowerCase() === userName.toLowerCase()
      ) ?? "User wasn`t found, try again";
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
