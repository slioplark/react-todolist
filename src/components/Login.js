import React from 'react';
import { useFormik } from 'formik';
import { login, logout } from '../actions/auth';
import { create, remove } from '../actions/profile';
import { useSelector, useDispatch } from 'react-redux';
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

  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
    }
  });

  const handleLogin = () => {
    dispatch(login());
    dispatch(create(formik.values));
  }

  const handleLogout = () => {
    dispatch(logout());
    dispatch(remove());
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <PersonIcon fontSize="large" />
        <TextField
          fullWidth
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          variant="outlined"
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          variant="outlined"
          onChange={formik.handleChange}
        />
      </CardContent>
      <CardActions>
        {
          isLogged
            ? (
              <Button
                fullWidth
                color="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )
            : (
              <Button
                fullWidth
                color="primary"
                onClick={handleLogin}
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