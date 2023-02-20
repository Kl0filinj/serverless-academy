import fetch from "node-fetch";

const endpoints = [
  "https://jsonbase.com/sls-team/json-793",
  "https://jsonbase.com/sls-team/json-64",
  "https://jsonbase.com/sls-team/json-955",
  "https://jsonbase.com/sls-team/json-231",
  "https://jsonbase.com/sls-team/json-931",
  "https://jsonbase.com/sls-team/json-93",
  "https://jsonbase.com/sls-team/json-342",
  "https://jsonbase.com/sls-team/json-770",
  "https://jsonbase.com/sls-team/json-491",
  "https://jsonbase.com/sls-team/json-281",
  "https://jsonbase.com/sls-team/json-718",
  "https://jsonbase.com/sls-team/json-310",
  "https://jsonbase.com/sls-team/json-806",
  "https://jsonbase.com/sls-team/json-469",
  "https://jsonbase.com/sls-team/json-258",
  "https://jsonbase.com/sls-team/json-516",
  "https://jsonbase.com/sls-team/json-79",
  "https://jsonbase.com/sls-team/json-706",
  "https://jsonbase.com/sls-team/json-521",
  "https://jsonbase.com/sls-team/json-350",
];

async function requestAttempt(endpoint) {
  for (let i = 0; i < 3; i += 1) {
    try {
      const response = await fetch(endpoint);
      const user = await response.json();
      return user;
    } catch (error) {
      if (i === 2) {
        return { error };
      }
      continue;
    }
  }
}

function getFinalValues(object, url) {
  getLoop(object);
  function getLoop(obj) {
    for (const key in obj) {
      if (key === "isDone") {
        console.log(`[Success] ${url}: isDone - ${obj[key]}`);
        break;
      }
      const element = obj[key];
      if (typeof element === "object" && !Array.isArray(element)) {
        getLoop(element);
      }
    }
  }
}

async function jsonSorting() {
  endpoints.forEach(async (item) => {
    const resp = await requestAttempt(item);
    if (resp.error) {
      console.log(`[Fail] ${item}: The endpoint is unavailable`);
    } else {
      getFinalValues(resp, item);
    }
  });
}

jsonSorting();
