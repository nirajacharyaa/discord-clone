import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import store from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route path="/discord-clone/" element={<Home />} />
            <Route path="/discord-clone/channels" element={<Dashboard />} />
            <Route path="/discord-clone/channels/:id" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
