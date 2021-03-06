import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Component/Blog/Blog";
import Dashboard from "./Component/Dashbord/Dashboard";
import Header from "./Component/Header/Header";
import HomePage from "./Component/HomePage/HomePage";
import NotFound from "./Component/NotFound/NotFound";
import Reviews from "./Component/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
