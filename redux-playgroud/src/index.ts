import { Reducer, Middleware } from 'redux';
import { createStore, applyMiddleware } from './reduxSource';
// import {
//   createStore,
//   combineReducers,
//   bindActionCreators,
//   applyMiddleware,
//   compose
// } from "./reduxSource";
// import logger from "redux-logger";

// // interface todoState {
// //   menuList:
// // }
const initialState: any = {
  menuList: [],
  expandMenus: [],
  activeMenu: undefined
};

// const commonMiddleWare: Middleware = ({ getState, dispatch }) => {
//   return () => dispatch;
// };

const todoApp: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MENU':
      return Object.assign({}, state, {
        menuList: action.data
      });
  }
};

const commonMiddleWare: Middleware = ({ getState, dispatch }) => next => {
  console.log('2', dispatch);

  return action => {
    console.log('1', dispatch);
    next(action);
  };
};

const commonMiddleWare2: Middleware = ({ getState, dispatch }) => next => {
  return action => {
    next(action);
  };
};

const store = createStore(
  todoApp,
  applyMiddleware(commonMiddleWare, commonMiddleWare2)
);

store.dispatch({
  type: 'UPDATE_MENU',
  data: [{ key: 1 }]
});
