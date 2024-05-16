import {Link, useLoaderData} from "react-router-dom";
import {fetchFilms} from "./api";
import React from "react";
import Navbar from "./Navbar";

export function filmsPageLoader() {
    return fetchFilms();
}

const FilmsPage = () => {
    // @ts-ignore
    const films = useLoaderData().results as Film[];

    return <div>
        <Navbar/>
        <ul>
            {films.map(film => {
                    const filmId = film.episode_id;
                    return <li key={filmId}>
                        <Link to={`/films/${filmId}`}>{film.title}</Link>
                    </li>;
                }
            )}
        </ul>
    </div>
}

export default FilmsPage;
