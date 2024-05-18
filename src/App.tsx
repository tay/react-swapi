import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";

import FilmsPage, {filmsPageLoader} from "./FilmsPage";
import FilmDetailPage, {filmDetailPageLoader} from "./FilmDetailPage";
import PersonsPage, {personsPageLoader} from "./PersonsPage";
import PersonDetailPage, {personDetailPageLoader} from "./PersonDetailPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <FilmsPage/>,
        loader: filmsPageLoader,
    },
    {
        path: "/films/:filmId",
        element: <FilmDetailPage/>,
        loader: filmDetailPageLoader,
    },
    {
        path: "/persons",
        element: <PersonsPage/>,
        loader: personsPageLoader,
    },
    {
        path: "/persons/:personId",
        element: <PersonDetailPage/>,
        loader: personDetailPageLoader,
    }
]);

const App = () => {
    return <HelmetProvider>
        <RouterProvider router={router}/>
    </HelmetProvider>
}

export default App;
