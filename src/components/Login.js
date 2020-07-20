import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../actions/auth';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0),
    },
  }
}));

const Login = () => {

  const classes = useStyles();

  const isLogged = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  return (
    <Card className={classes.root}>
      <CardContent>
        <PersonIcon fontSize="large" />
        <TextField
          fullWidth
          id="lastName"
          label="Last Name"
          value={lastName}
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          fullWidth
          id="firstName"
          label="First Name"
          value={firstName}
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </CardContent>
      <CardActions>
        {
          isLogged
            ? (
              <Button
                fullWidth
                color="secondary"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>
            )
            : (
              <Button
                fullWidth
                color="primary"
                onClick={() => dispatch(login())}
              >
                Login
              </Button>
            )
        }
      </CardActions>
    </Card>
  );

};

export default Login;