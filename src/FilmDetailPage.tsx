import {NavLink, useFetcher, useLoaderData} from "react-router-dom";
import {fetchFilm} from "./api";
import Navbar from "./Navbar";
import {getResourceIdFromUrl} from "./utils";
import React, {useEffect} from "react";
import {Helmet} from "react-helmet-async";

// @ts-ignore
export function filmDetailPageLoader({params}) {
    return fetchFilm(params.filmId);
}

const FilmPersonCard = ({personId}: { personId: number }) => {
    const fetcher = useFetcher();

    useEffect(() => {
        if (fetcher.state === "idle" && !fetcher.data) {
            fetcher.load(`/persons/${personId}`);
        }
    }, [fetcher, personId]);


    if (!fetcher.data) {
        return <li><NavLink to={`/persons/${personId}`}>Loading…</NavLink></li>
    }

    return <li>
        <NavLink to={`/persons/${personId}`}>{fetcher.data.name}</NavLink>
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
