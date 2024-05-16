import {NavLink, useFetcher, useLoaderData} from "react-router-dom";
import {fetchPerson} from "./api";
import Navbar from "./Navbar";
import {getResourceIdFromUrl} from "./utils";
import React, {useEffect} from "react";
import { Helmet } from "react-helmet-async";

// @ts-ignore
export function personDetailPageLoader({params}) {
    return fetchPerson(params.personId);
}

const PersonFilmCard = ({filmId}: { filmId: number }) => {
    const fetcher = useFetcher();

    useEffect(() => {
        if (fetcher.state === "idle" && !fetcher.data) {
            fetcher.load(`/films/${filmId}`);
        }
    }, [fetcher, filmId]);

    if (!fetcher.data) {
        return <li><NavLink to={`/films/${filmId}`}>Loading…</NavLink></li>
    }

    return <li>
        <NavLink to={`/films/${filmId}`}>{fetcher.data.title}</NavLink>
    </li>;
}

const PersonDetailPage = () => {
    // @ts-ignore
    const person = useLoaderData() as Person;

    return <div>
        <Helmet><title>SWAPI | {person.name}</title></Helmet>
        <Navbar/>

        <h1>{person.name}</h1>
        Eye color: {person.eye_color}
        <div>
            <h3>Films</h3>
            <ul>
                {person.films.map((filmUrl) => {
                    const filmId = getResourceIdFromUrl(filmUrl);
                    return <PersonFilmCard key={filmId} filmId={filmId}/>
                })}
            </ul>
        </div>
    </div>
}

export default PersonDetailPage;
