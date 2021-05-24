import React from "react";
import { makeStyles } from "@material-ui/core";
import { GRAY_1 } from '../../utils/themes'

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center"
  },
  border: {
    borderBottom: "1px solid",
    borderBottomColor: GRAY_1,
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 24,
    color: GRAY_1
  }
}));

export const AnswerDivider = () => {
 const classes = useStyles();
 return (
  <div className={classes.container}>
    <div className={classes.border} />
    <span className={classes.content}>Answers</span>
    <div className={classes.border} />
  </div>
 );
};