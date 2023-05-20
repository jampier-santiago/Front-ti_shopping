import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import useRouter from "./router/router";

import { store } from "./redux/store";
import { Suspense } from "react";

function App() {
  const Router = useRouter();

  return (
    <Provider store={store}>
      <Suspense fallback={<div>lOADING</div>}>
        <BrowserRouter>{Router}</BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
