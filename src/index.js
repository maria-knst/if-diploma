import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store from "./redux/store";
import {persistor} from "./redux/store";

window.React = React;

const element = document.getElementById("root");
const root = createRoot(element);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
