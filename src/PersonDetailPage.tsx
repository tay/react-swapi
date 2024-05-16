import {Await, NavLink, useLoaderData} from "react-router-dom";
import {fetchFilm, fetchPerson} from "./api";
import Navbar from "./Navbar";
import {getResourceIdFromUrl} from "./utils";
import React from "react";
import {Helmet} from "react-helmet-async";

// @ts-ignore
export async function personDetailPageLoader({params}) {
    const person = await fetchPerson(params.personId);
    const films = person.films.map(filmUrl => {
        const id = getResourceIdFromUrl(filmUrl);
        return fetchFilm(id);
    });

    return {
        person: person,
        films: films,
    };
}

const PersonFilmCardLoading = () => {
    return <li>
        <NavLink to={`/films`}>Loading…</NavLink>
    </li>;
}

const PersonFilmCard = ({film}: { film: Film }) => {
    return <li>
        <NavLink to={`/films/${film.episode_id}`}>{film.title}</NavLink>
    </li>;
}

const PersonDetailPage = () => {
    // @ts-ignore
    const {person} = useLoaderData() as { person: Person };
    // @ts-ignore
    const {films} = useLoaderData() as { films: Promise<Film>[] };

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
