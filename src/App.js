import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Mode from "./Components/Mode";
import { changeTheme } from "./Helpers/ChangeTheme";

function App() {

  const [theme, setTheme] = useState();
  const handleClick = () => {
    setTheme(!theme);
    changeTheme(theme);
  };

  return (
    <div className="app">
      <React.Fragment>
        <header className="app-header">
          <Header />
        </header>
        <main className="app-main">
          <Mode
            onChange={handleClick}
            theme={theme}
          />
          <Routes>
            <Route path="/KorchinskyWebsiteRepo/" index element={<Home />} />
            <Route path="/KorchinskyWebsiteRepo/about" element={<AboutUs />} exact />
            <Route path="/KorchinskyWebsiteRepo/gallery" element={<Gallery />} exact />
            <Route path="/KorchinskyWebsiteRepo/blog" element={<Blog />} exact />
            <Route path="/KorchinskyWebsiteRepo/contact" element={<Contact />} exact />
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
