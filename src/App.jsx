import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./components/Layout"

import PageAccueil from "./page/PageAccueil"
import PageProduit from "./page/PageProduit"
import PagePropos from "./page/PagePropos"
import PageContact from "./page/PageContact"
import Error from "./page/Error"



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
        },
        ]
        
    },
    {
        path:'/*',
        element: <Error></Error> 
    }

])

function App() {
    return <RouterProvider router={router} />
}

export default App
