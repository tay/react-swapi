import * as React from "react";
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import FilmsPage, {filmsPageLoader} from "./FilmsPage";
import FilmDetailPage, {filmDetailPageLoader} from "./FilmDetailPage";
import PersonsPage, {personsPageLoader} from "./PersonsPage";
import PersonDetailPage, {personDetailPageLoader} from "./PersonDetailPage";


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
    },
    {
        path: "/persons",
        element: <PersonsPage />,
        loader: personsPageLoader,
    },
    {
        path: "/persons/:personId",
        element: <PersonDetailPage />,
        loader: personDetailPageLoader,
    }
]);

// @ts-ignore
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);