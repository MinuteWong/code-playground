import { Reducer, Middleware, createStore, applyMiddleware } from "redux";
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
    case "UPDATE_MENU":
      return Object.assign({}, state, {
        menuList: action.data
      });
  }
};

const commonMiddleWare: Middleware = ({ getState, dispatch }) => next => {
  console.log("2", next);
  return action => {
    console.log("1", dispatch);
    next(action);
  };
};

const commonMiddleWare2: Middleware = ({ getState, dispatch }) => next => {
  console.log("4", next);
  return action => {
    console.log("5", dispatch);
    next(action);
  };
};

const store = createStore(todoApp, applyMiddleware(commonMiddleWare, commonMiddleWare2));

store.dispatch({
  type: "UPDATE_MENU",
  data: [{ key: 1 }]
});
