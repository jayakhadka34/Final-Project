import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./component/router/MainRouter";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Store, { persistor } from "./component/redux/store";
import { AppContextProvier } from "./component/utiles/ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading={"loading..."} persistor={persistor}>
         <AppContextProvier>
         <RouterProvider router={MainRouter}/>
         </AppContextProvier>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
