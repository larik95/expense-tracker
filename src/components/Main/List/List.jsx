import React from "react";
import useStyles from "./styles";
import {
  Avatar,
  IconButton,
  List as MuiList,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
} from "@material-ui/core";
import { MoneyOff, Delete } from "@material-ui/icons";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../../../context/context";



const List = () => {
  const classes = useStyles();

const {delTransaction, transactions} = useContext(ExpenseTrackerContext);

  return (
    <MuiList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem className={classes.list}>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => delTransaction(transaction.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MuiList>
  );
};

export default List;
