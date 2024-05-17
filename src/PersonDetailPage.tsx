import React from "react";
import {Helmet} from "react-helmet-async";
import {Await, Link, useLoaderData} from "react-router-dom";

import {fetchFilmByUrl, fetchPerson} from "./api";
import Navbar from "./Navbar";

type PersonDetailPageLoaderType = { person: Person; films: Promise<Film>[] }

// @ts-expect-error Params
export async function personDetailPageLoader({params}): PersonDetailPageLoaderType {
    const person = await fetchPerson(params.personId);
    const films = person.films.map(filmUrl => {
        return fetchFilmByUrl(filmUrl);
    });

    return {
        person: person,
        films: films,
    };
}

const PersonFilmCardLoading = () => {
    return <li>
        <div className="loading">Loading…</div>
    </li>;
}

const PersonFilmCard = ({film}: { film: Film }) => {
    return <li>
        <Link to={`/films/${film.episode_id}`}>{film.title}</Link>
    </li>;
}

const PersonDetailPage = () => {
    const {person, films} = useLoaderData() as PersonDetailPageLoaderType;

    return <div>
        <Helmet><title>SWAPI | {person.name}</title></Helmet>
        <Navbar/>

        <h1>{person.name}</h1>
        Eye color: {person.eye_color}
        <div>
            <h3>Films</h3>
            <ul>
                {films.map((film: Promise<Film>, i) => {
                    return <React.Suspense
                        fallback={<PersonFilmCardLoading/>}
                        key={i}
                    >
                        <Await resolve={film}>
                            {(film) => <PersonFilmCard film={film}/>}
                        </Await>
                    </React.Suspense>
                })}
            </ul>
        </div>
    </div>
}

export default PersonDetailPage;
