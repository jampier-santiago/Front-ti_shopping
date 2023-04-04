import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import useRouter from "./router/router";

import { store } from "./redux/store";

function App() {
  const Router = useRouter();

  return (
    <Provider store={store}>
      <BrowserRouter>{Router}</BrowserRouter>
    </Provider>
  );
}

export default App;
