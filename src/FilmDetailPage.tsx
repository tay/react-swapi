import React from "react";
import {Await, Link, LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import invariant from "tiny-invariant";

import {getFilm, getPersonByUrl} from "./data";
import Navbar from "./Navbar";
import {getResourceIdFromUrl} from "./utils";


type FilmDetailPageLoaderType = { film: Film; persons: Promise<Person>[] }

export async function filmDetailPageLoader({params}: LoaderFunctionArgs): Promise<FilmDetailPageLoaderType> {
    invariant(params.filmId, "Expected params.filmId");

    const film = await getFilm(params.filmId);
    const persons = film.characters.map(personUrl => getPersonByUrl(personUrl));

    return {
        film,
        persons,
    };
}

const FilmPersonItemLoading = () => {
    return <li>
        <div className="loading">Loading…</div>
    </li>;
}

const FilmPersonItem = ({person}: { person: Person }) => {
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
                        fallback={<FilmPersonItemLoading/>}
                        key={i}
                    >
                        <Await resolve={person}>
                            {(person) => <FilmPersonItem person={person}/>}
                        </Await>
                    </React.Suspense>
                })}
            </ul>
        </div>
    </div>
}

export default FilmDetailPage;
