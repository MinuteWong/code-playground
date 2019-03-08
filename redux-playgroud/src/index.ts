// import { createStore, Reducer, applyMiddleware, Middleware } from "redux";
// import logger from "redux-logger";

// // interface todoState {
// //   menuList:
// // }
// const initialState = {
//   menuList: [],
//   expandMenus: [],
//   activeMenu: undefined
// };

// const commonMiddleWare: Middleware = ({ getState, dispatch }) => {
//   return () => dispatch;
// };

// const todoApp: Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "UPDATE_MENU":
//       return Object.assign({}, state, {
//         menuList: action.data
//       });
//   }
// };

// const store = createStore(todoApp);

// store.dispatch({
//   type: "UPDATE_MENU",
//   data: [{ key: 1 }]
// });

import {
  createStore,
  combineReducers,
  bindActionCreators,
  applyMiddleware,
  compose
} from "./reduxSource";
