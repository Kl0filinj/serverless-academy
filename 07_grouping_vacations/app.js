const { readFile, writeFile } = require("node:fs/promises");
const fs = require("fs");

const dataPath = __dirname + "/data";

// high order fnc to get time record
async function optimizeVacationList() {
  const vacationList = JSON.parse(
    await readFile(dataPath + "/vacations.json", "utf8")
  );
  const userNmaes = Array.from(
    new Set(vacationList.map((item) => item.user.name))
  );
  console.log(userNmaes);
  const newVacationsList = [];
  for (let i = 0; i < userNmaes.length; i += 1) {
    const findAllUsersWithName = vacationList.filter(
      (item) => item.user.name === userNmaes[i]
    );
    const vacations = findAllUsersWithName.map(({ startDate, endDate }) => {
      return { startDate, endDate };
    });
    const { _id: userId, name: userName } = findAllUsersWithName[0].user;
    newVacationsList.push({
      userId,
      userName,
      vacations,
    });
  }
  await writeFile(
    dataPath + "/newVacations.json",
    JSON.stringify(newVacationsList),
    "utf8"
  );
  console.log(newVacationsList);
}

optimizeVacationList();
// [
//   {
//     userId: "60b7c1f04df06a0011ef0e76",
//     userName: "Laurence Knox",
//     vacations: [
//       {
//         startDate: "2021-11-19",
//         endDate: "2021-11-23",
//       },
//       {
//         startDate: "2021-12-09",
//         endDate: "2021-12-10",
//       },
//     ],
//   },
// ];
