import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Accordion from "../pages/Accordion/Accordion";

const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/accordion',
                element:<Accordion/>
            }
        ]
    }
])

export default myCreateRouter;