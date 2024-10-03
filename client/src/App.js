import logo from './logo.svg';
import './App.css';
import SharedLayout from "./components/SharedLayout";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
