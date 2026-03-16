

import Section1 from "./components/Section1"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./components/Layout"

import PageAccueil from "./page/PageAccueil"
import PageProduit from "./page/PageProduit"
import PagePropos from "./page/PagePropos"
import PageContact from "./page/PageContact"



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
        {
            path: "/",
            element: <PageAccueil />
        },
        {
            path: "/boutique",
            element: <PageProduit />
        },
        {
            path: "/contact",
            element: <PageContact />
        },
        {
            path: "/apropos",
            element: <PagePropos />
        }
        ],
        
    }

])

function App() {
    return <RouterProvider router={router} />
}

export default App
