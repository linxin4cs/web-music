import React, { memo } from "react";
import { Provider } from "react-redux";

import Router from "@/router";
import store from "./store";

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import AppPlayer from "./components/app-player";

const App = memo(() => {
  return (
    <Provider store={store}>
      <div>
        <AppHeader />
        {Router()}
        <AppFooter />
        <AppPlayer />
      </div>
    </Provider>
  );
});

export default App;
