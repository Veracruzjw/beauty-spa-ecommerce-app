import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Details from "../pages/Details";
import Checkout from "../pages/Checkout";
import About from "../pages/About";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'product/:id',
                element: <Details />,
            },
            {
                path: 'checkout',
                element: <Checkout />
            },
            {
                path: 'about',
                element: <About />
            },
        ]
    },
]);