import {NavLink, useLoaderData} from "react-router-dom";
import {fetchFilms} from "./api";
import React from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "./Navbar";

export function filmsPageLoader() {
    return fetchFilms();
}

const FilmsPage = () => {
    // @ts-ignore
    const films = useLoaderData().results as Film[];

    return <div>
        <Helmet><title>SWAPI | Films</title></Helmet>
        <Navbar/>

        <h1>Films</h1>
        <ul>
            {films.map(film => {
                    const filmId = film.episode_id;
                    return <li key={filmId}>
                        <NavLink to={`/films/${filmId}`}>{film.title}</NavLink>
                    </li>;
                }
            )}
        </ul>
    </div>
}

export default FilmsPage;
