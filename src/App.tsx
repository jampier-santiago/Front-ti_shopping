import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import useRouter from "./router/router";

import { store } from "./store/store";
import useViews from "./views";

function App() {
  const Router = useRouter();
  const {useComponents} = useViews();
  const {Footer} = useComponents();

  return (
    <Provider store={store}>
      <BrowserRouter>{Router}</BrowserRouter>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
