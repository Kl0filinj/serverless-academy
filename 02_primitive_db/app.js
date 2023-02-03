import inquirer from "inquirer";

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
    name: "gender",
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

inquirer.prompt(startQuestions).then((answers) => {
  if (answers.userName !== "Enter") {
    inquirer.prompt(questions).then((answers) => {
      console.log(JSON.stringify(answers, null, " "));
    });
  } else {
    console.log("Start loocking for db");
  }
});
