//All logic of transactions
//custom hooks

import { useContext } from "react";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";
import { ExpenseTrackerContext } from "./context/context";

const useTransactions = (title) => {
  resetCategories();

  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  ); /*
  The reducer walks through the array element-by-element, at each step adding the current array 
  value to the result from the previous step (this result is the running sum of all the previous steps) 
   — until there are no more elements to add.
  */
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  //console.log({ transactionsPerType, total, categories });

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return {  total, chartData };
};

export default useTransactions;
