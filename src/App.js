import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Order from "./components/Orders/Order";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import { ProductsAndCartLoader } from "./loaders/ProductsAndCartLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("products.json");
        },
        element: <Shop></Shop>,
      },
      {
        path: "/orders",
        loader: ProductsAndCartLoader,
        element: <Order></Order>,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
