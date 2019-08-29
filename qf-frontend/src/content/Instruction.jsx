import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Instruction(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    loanAmount: '',
    repaymentPeriod: '',
    interestRateOfLoan: '',
    result: ''
  })
  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value })
  }
  return (
    <Card className={classes.card}>
      <CardHeader title='HDB Loan Calculator' />
      <CardContent>
        <TextField
          id = 'loanAmount'
          label = 'Loan Amount'
          className = {classes.textField}
          value = {values.loanAmount}
          onChange={handleChange('loanAmount')}
          margin="normal"
        />
        <TextField
          id = 'repaymentPeriod'
          label = 'Repayment Period'
          className = {classes.textField}
          value = {values.repaymentPeriod}
          onChange={handleChange('repaymentPeriod')}
          margin="normal"
        />
        <TextField
          id = 'interestRateOfLoan'
          label = 'Interest Rate Of Loan'
          className = {classes.textField}
          value = {values.interestRateOfLoan}
          onChange={handleChange('interestRateOfLoan')}
          margin="normal"
        />
      </CardContent>
      <CardActions>
        <Button size="large">Calculate</Button>
      </CardActions>
      <CardContent>
        <TextField
          id = 'result'
          label = 'Result'
          className = {classes.textField}
          value = {values.result}
          onChange={handleChange('result')}
          margin="normal"
        />
      </CardContent>
    </Card>
  );
}
