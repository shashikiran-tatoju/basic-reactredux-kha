// reducers.js
import {
  combineReducers,
} from 'redux';

export const geod = (state = {}, action) => {  
  switch (action.type) {
    case 'ACTIVATE_GEOD':
      return action.geod;
    case 'CLOSE_GEOD':
      return {};
    default:
      return state;
  }
};

export const menuList = (state = {}, action) => {  
  switch (action.type) {
    case 'Save_Menu':
      return action.list;
    default:
      return state;
  }
};

export const users = (state = {}, action) => {  
  switch (action.type) {
    case 'SAVE_USERS':
      return action.users;
    default:
      return state;
  }
};

export const reducers = combineReducers({  
  geod,
  menuList,
  users,
});