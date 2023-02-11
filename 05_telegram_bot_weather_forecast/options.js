export const startOption = {
  reply_markup: JSON.stringify({
    keyboard: [[{ text: "USD" }], [{ text: "EUR" }]],
  }),
};

export const weatherOptions = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: "at intervals of 3 hours" }],
      [{ text: "at intervals of 6 hours" }],
    ],
  }),
};
