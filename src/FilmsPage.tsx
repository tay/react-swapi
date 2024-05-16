import {Link, useLoaderData} from "react-router-dom";
import {fetchFilms} from "./api";
import React from "react";

export function filmsPageLoader() {
    return fetchFilms();
}

const FilmsPage = () => {
    // @ts-ignore
    const films:Films[] = useLoaderData().results as Array<Film>;

    return <ul>
        {films.map((film, i) =>
            <li>
                <Link to={`/films/${film.episode_id}`}>{film.title}</Link>
            </li>
        )}
    </ul>
}

export default FilmsPage;
