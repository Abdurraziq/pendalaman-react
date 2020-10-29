import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import PizzaTranslator from "./src/PizzaTranslator";

const initialState = {
  teks: "",
};

const reducer = (state = initialState, action) => {
  return action.type ? { teks: action.type } : state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PizzaTranslator />
      </Provider>
    );
  }
}

export default App;
