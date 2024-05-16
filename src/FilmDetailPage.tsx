import {Link, useLoaderData} from "react-router-dom";
import {fetchFilm} from "./api";
import Navbar from "./Navbar";
import {getResourceIdFromUrl} from "./utils";
import React from "react";

// @ts-ignore
export function filmDetailPageLoader({params}) {
    return fetchFilm(params.filmId);
}

const FilmPeopleCard = ({film}: { film: Film }) => {
    return <ul>
        {film.characters.map((personUrl) => {
            const personId = getResourceIdFromUrl(personUrl);
            return <li key={personId}>
                <Link to={`/persons/${personId}`}>Person #{personId}</Link>
            </li>;
        })}
    </ul>
}

const FilmDetailPage = () => {
    // @ts-ignore
    const film: Film = useLoaderData();

    return <div>
        <Navbar/>
        <h1>{film.title}</h1>
        <p>{film.opening_crawl}</p>
        <FilmPeopleCard film={film} />
    </div>
}

export default FilmDetailPage;
