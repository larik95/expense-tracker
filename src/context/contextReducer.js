let transactions;

const contextReducer = (state, action) => {
  //Action
  switch (action.type) {
    case "DELETE":
      transactions = state.filter((t) => t.id !== action.payload);

      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case "ADD":
      transactions = [action.payload, ...state];
      return transactions;
      
      localStorage.setItem("transactions", JSON.stringify(transactions));
    default:
      return state;
  }
};

export default contextReducer;
