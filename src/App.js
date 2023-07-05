import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";

import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
