import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Categories from "../pages/Categories";

const router = new createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/categories',
      element: <Categories />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    }
  ]);
export {router}