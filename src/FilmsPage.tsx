import {Helmet} from 'react-helmet-async';
import {Link, useLoaderData} from "react-router-dom";

import {getFilms} from "./data";
import Navbar from "./Navbar";

type FilmsPageLoaderType = { results: Film[] };

export function filmsPageLoader() {
    return getFilms();
}

const FilmsPage = () => {
    const films = (useLoaderData() as FilmsPageLoaderType).results;

    return <div>
        <Helmet><title>SWAPI | Films</title></Helmet>
        <Navbar/>

        <h1>Films</h1>
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
