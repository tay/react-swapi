import React from "react";
import {Await, Link, LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import invariant from "tiny-invariant";
import {Helmet} from "react-helmet-async";

import {getFilmByUrl, getPerson} from "./data";
import Navbar from "./Navbar";

type PersonDetailPageLoaderType = { person: Person; films: Promise<Film>[] }

export async function personDetailPageLoader({params}: LoaderFunctionArgs): Promise<PersonDetailPageLoaderType> {
    invariant(params.personId, "Expected params.personId");

    const person = await getPerson(params.personId);
    const films = person.films.map(filmUrl => {
        return getFilmByUrl(filmUrl);
    });

    return {
        person: person,
        films: films,
    };
}

const PersonFilmItemLoading = () => {
    return <li>
        <div className="loading">Loading…</div>
    </li>;
}

const PersonFilmItem = ({film}: { film: Film }) => {
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
                        fallback={<PersonFilmItemLoading/>}
                        key={i}
                    >
                        <Await resolve={film}>
                            {(film) => <PersonFilmItem film={film}/>}
                        </Await>
                    </React.Suspense>
                })}
            </ul>
        </div>
    </div>
}

export default PersonDetailPage;
