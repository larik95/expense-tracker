const incomeColors = [
  "#265c53",
  "#276d54",
  "#377c4e",
  "#538a41",
  "#75972f",
  "#9ea017",
  "#cca600",
  "#ffa600",
  "#c2c230",
];
const expenseColors = [
  "#5c0000",
  "#751809",
  "#8f2e0d",
  "#a7440f",
  "#bf5b0e",
  "#d6730c",
  "#eb8c06",
  "#d38600",
  "#e8ac00",
  "#f6d400",
  "#f6d470",
];

export const incomeCategories = [
  { type: "Salary", amount: 0, color: incomeColors[0] },
  { type: "Business", amount: 0, color: incomeColors[1] },
  { type: "Investments", amount: 0, color: incomeColors[2] },
  { type: "Savings", amount: 0, color: incomeColors[3] },
  { type: "Extra income", amount: 0, color: incomeColors[4] },
  { type: "Deposits", amount: 0, color: incomeColors[5] },
  { type: "Rental income", amount: 0, color: incomeColors[6] },
  { type: "Lottery", amount: 0, color: incomeColors[7] },
  { type: "Gifts", amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: "Bills", amount: 0, color: expenseColors[0] },
  { type: "House", amount: 0, color: expenseColors[1] },
  { type: "Food", amount: 0, color: expenseColors[2] },
  { type: "Phone", amount: 0, color: expenseColors[3] },
  { type: "Car", amount: 0, color: expenseColors[4] },
  { type: "Travel", amount: 0, color: expenseColors[5] },
  { type: "Clothes", amount: 0, color: expenseColors[6] },
  { type: "Shopping", amount: 0, color: expenseColors[7] },
  { type: "Entertainment", amount: 0, color: expenseColors[8] },
  { type: "Pets", amount: 0, color: expenseColors[9] },
  { type: "Other", amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
