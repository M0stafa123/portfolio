import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Main from "./components/main";
import Addproject from "./components/addProject";
function App() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 2000);
    };
    scrollToTop();
  }, []);
  return (
    <div className="relative App ">
      <div className="mix-blend-color-dodge fixed w-full h-full bg-[url('./bg.svg')] -z-10"></div>
      <div className="bg"></div>
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
