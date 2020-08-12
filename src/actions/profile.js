import { CREATE, REMOVE } from '../constants/actionTypes';

export const create = (formValue) => ({
  type: CREATE,
  payload: formValue,
});

export const remove = () => ({
  type: REMOVE,
});
