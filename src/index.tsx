import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import FilmsPage, {filmsPageLoader} from "./FilmsPage";
import FilmDetailPage, {filmDetailPageLoader} from "./FilmDetailPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <FilmsPage />,
        loader: filmsPageLoader,
    },
    {
        path: "/films/:filmId",
        element: <FilmDetailPage />,
        loader: filmDetailPageLoader,
    }
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);