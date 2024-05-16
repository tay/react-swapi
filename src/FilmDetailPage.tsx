import {NavLink, useLoaderData} from "react-router-dom";
import {fetchFilm, fetchPerson} from "./api";
import Navbar from "./Navbar";
import {getResourceIdFromUrl} from "./utils";
import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";

// @ts-ignore
export function filmDetailPageLoader({params}) {
    return fetchFilm(params.filmId);
}

const FilmPersonCard = ({personId}: { personId: number }) => {
    const [person, setPerson] = useState<Person | null>(null);

    useEffect(() => {
        fetchPerson(personId).then(result =>
            setPerson(result)
        );
    }, [personId]);

    if (!person) {
        return <li><NavLink to={`/persons/${personId}`}>Loading…</NavLink></li>
    }

    return <li>
        <NavLink to={`/persons/${personId}`}>{person.name}</NavLink>
    </li>;
}

const FilmDetailPage = () => {
    // @ts-ignore
    const film = useLoaderData() as Film;

    return <div>
        <Helmet><title>SWAPI | {film.title}</title></Helmet>
        <Navbar/>

        <h1>{film.title}</h1>
        <p>{film.opening_crawl}</p>
        <div>
            <h3>Characters</h3>
            <ul>
                {film.characters.map((personUrl) => {
                    const personId = getResourceIdFromUrl(personUrl);
                    return <FilmPersonCard key={personId} personId={personId}/>;
                })}
            </ul>
        </div>
    </div>
}

export default FilmDetailPage;
