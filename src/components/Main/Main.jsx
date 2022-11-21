import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";
import Form from "./Form/Form";
import List from './List/List'
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent className={classes.cartContent}>
        <Typography align="center" variant="h5">
          Total Balance ${ balance }
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* INFOCARD */}
          Try saying: Add income for $100 in Category salary for Monday...
        </Typography>
        <Divider className={classes.divider}/>
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
           <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
