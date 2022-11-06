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
            <Route path="/" element={<Home />} />
            <Route path="/channels" element={<Dashboard />} />
            <Route path="/channels/:id" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
