import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/blogcards/blogCards";
import BlogCard from "./components/card/card1";
import Card2 from "./components/card/card2";
import Card3 from "./components/card/card3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/headphone-contained" element={<BlogCard />} />
      <Route path="/watches-contained" element={<Card2 />} />
      <Route path="/bottles-contained" element={<Card3 />} />
    </Routes>
  );
}

export default App;
