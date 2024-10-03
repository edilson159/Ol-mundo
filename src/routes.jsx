import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./AppRoutes.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Start from "./Pages/Start/Start";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import DefaultPage from "./Components/DefaultPage/DefaultPage";
import Post from "./Pages/Post/Post";
import NotFound from "./Pages/NotFound/NotFound";

// console.log(window.location);

// const page = window.location.pathname === "/" ? <Start /> : <AboutMe />;

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Start />} />
          <Route path="sobremim" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
