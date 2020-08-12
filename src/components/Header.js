import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  const profile = useSelector((state) => state.profile);
  const isLogged = useSelector((state) => state.auth);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <section>
            <Link to="/">
              <Typography variant="h6">React Todolist</Typography>
            </Link>
          </section>
          <section>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">
                {isLogged
                  ? `${profile.lastName} ${profile.firstName}`
                  : `Login`}
              </Button>
            </Link>
          </section>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
