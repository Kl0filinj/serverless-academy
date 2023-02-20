export const startQuestions = [
  {
    type: "input",
    name: "userName",
    message: "Enter thr user`s name. To cancel press ENTER ",
    default: "Enter",
  },
];

export const userInfoQuestions = [
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

export const displayDbQuestions = [
  {
    type: "confirm",
    name: "confirmDisplayDb",
    message: "Do u want to display DB Data ? ",
    default: "Yes",
  },
];

export const searchForUserQuestions = [
  {
    type: "input",
    name: "userName",
    message: "Enter thr user`s name u wanna find ?",
  },
];
