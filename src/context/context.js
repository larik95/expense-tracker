// Reducer => a function that takes in the old state, and an action => new state

import React from "react";
import { createContext, useReducer } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const delTransaction = (id) => {
        dispatch({type: "DELETE", payload: id}); // payload is the value you want to update the state with. 
    }
    const addTransaction = (transaction) => {
        dispatch({type: "ADD", payload: transaction});
    }

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    //console.log(transactions)
    return (
        <ExpenseTrackerContext.Provider value={{ 
            delTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )


}