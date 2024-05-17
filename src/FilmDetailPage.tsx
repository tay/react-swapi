import React from "react";
import {Await, Link, useLoaderData} from "react-router-dom";
import {Helmet} from "react-helmet-async";

import {fetchFilm, fetchPersonByUrl} from "./api";
import Navbar from "./Navbar";
import {getResourceIdFromUrl} from "./utils";


type FilmDetailPageLoaderType = { film: Film; persons: Promise<Person>[] }

// @ts-expect-error Params
export async function filmDetailPageLoader({params}): Promise<FilmDetailPageLoaderType> {
    const film = await fetchFilm(params.filmId);
    const persons = film.characters.map(personUrl => {
        return fetchPersonByUrl(personUrl);
    });

    return {
        film,
        persons,
    };
}

const FilmPersonCardLoading = () => {
    return <li>
        <Link to={`/persons`}>Loading…</Link>
    </li>;
}

const FilmPersonCard = ({person}: { person: Person }) => {
    const id = getResourceIdFromUrl(person.url);

    return <li>
        <Link to={`/persons/${id}`}>{person.name}</Link>
    </li>;
}

const FilmDetailPage = () => {
    const {film, persons} = useLoaderData() as FilmDetailPageLoaderType;

    return <div>
        <Helmet><title>SWAPI | {film.title}</title></Helmet>
        <Navbar/>

        <h1>{film.title}</h1>
        <p>{film.opening_crawl}</p>
        <div>
            <h3>Characters</h3>
            <ul>
                {persons.map((person: Promise<Person>, i) => {
                    return <React.Suspense
                        fallback={<FilmPersonCardLoading/>}
                        key={i}
                    >
                        <Await resolve={person}>
                            {(person) => <FilmPersonCard person={person} />}
                        </Await>
                    </React.Suspense>
                })}
            </ul>
        </div>
    </div>
}

export default FilmDetailPage;
