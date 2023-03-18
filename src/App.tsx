import "./App.css";

import { BrowserRouter } from "react-router-dom";
import useRouter from "./router/router";

function App() {
  const Router = useRouter();

  return <BrowserRouter>{Router}</BrowserRouter>;
}

export default App;
