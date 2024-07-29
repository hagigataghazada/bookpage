import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Categories from "../pages/Categories";
import NotFound from "../pages/NotFound";
import Category from "../pages/Category";
import ProductPage from "../pages/ProductPage";

const router = new createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: '/categories',
      element: <Categories />,
    },
    {
      path: '/categories/:category/:id',
      element: <Category/>,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/product/:id',
      element: <ProductPage />
    }
  ]);
export {router}