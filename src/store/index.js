import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

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
    posts: [],
  },
  action
) => {
  switch (action.type) {
    case 'GET_POST_DATA':
      return {...state, posts: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());

export default store;

export const getPosts = () => {
  return async(dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({
      type: 'GET_POST_DATA',
      payload: data,
    });
  }
  
};