import { CREATE, REMOVE } from '../constants/actionTypes';

const profile = (state = {}, action) => {
  const payload = action.payload;

  switch (action.type) {
    case CREATE:
      return {
        lastName: payload.lastName,
        firstName: payload.firstName,
      };
    case REMOVE:
      return {
        lastName: '',
        firstName: '',
      };
    default:
      return state;
  }
};

export default profile;
