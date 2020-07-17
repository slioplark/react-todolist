import { LOGIN, LOGOUT } from '../constants/actionTypes';

const auth = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      state = true;
      break;
    case LOGOUT:
      state = false;
      break;
    default:
      state = false;
      break;
  }

  return state;
};

export default auth;