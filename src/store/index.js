import { createStore } from "redux";

const initialState = {
  count: 50,
  posts: [
    { id: 1, title: "Reduxについて" },
    { id: 1, title: "ReduxのHooksについて" },
  ],
}
const reducer = (state = initialState) => {
  return state;
}

const store = createStore(reducer);

export default store;