import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Auth from "./pages/auth";
import CreteRecipes from "./pages/create-recipe";
import SavedRecipes from "./pages/saved-recipe";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreteRecipes />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
