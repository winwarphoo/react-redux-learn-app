import { createStore, combineReducers } from "redux";

// const initialState = {
//   count: 50,
//   posts: [
//     { id: 1, title: "Reduxについて" },
//     { id: 1, title: "ReduxのHooksについて" },
//   ],
// }
// const reducer = (state = initialState) => {
//   return state;
// };
const countReducer = (
  state = {
    count: 50,
  },
  action
) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const postsReducer = (
  state = {
    posts: [
      { id: 1, title: 'Reduxについて' },
      {
        id: 2,
        title: 'ReduxのHooksについて',
      },
    ],
  }
) => {
  return state;
};

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());
export default store;