import React, { Component } from "react";
import CounterApp from "./src/CounterApp";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  angka: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TAMBAHKAN":
      return { angka: state.angka + 1 };
    case "KURANGI":
      return { angka: state.angka - 1 };
  }

  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

export default App;
