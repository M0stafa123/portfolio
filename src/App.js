import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Addproject from "./components/addProject";
import SVG from "./components/logo";
function App() {
  setTimeout(async () => {
    return await fetch("https://portfolio-z8h6.onrender.com")
      .then((res) => res.json())
      .then((data) => data);
  }, 600000);
  return (
    <div className="App relative ">
      <div className="mix-blend-color-dodge fixed w-full h-full bg-[url('https://fffuel.co/images/nnnoise-bg.svg')] -z-10"></div>
      <SVG />
      <div className="bg fixed w-full h-full top-0 left-0"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/65c2774c940f12a255a51d7a" element={<Addproject />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
