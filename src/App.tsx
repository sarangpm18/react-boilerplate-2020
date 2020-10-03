import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
