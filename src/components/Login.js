import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../actions/auth';
import Button from '@material-ui/core/Button';

const Login = () => {
  const isLogged = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h2>{isLogged ? 'Login' : 'Logout'} with redux</h2>
      <Button color="primary" onClick={() => dispatch(login())}>Login</Button>
      <Button color="secondary" onClick={() => dispatch(logout())}>Logout</Button>
    </Fragment>
  );
};

export default Login;