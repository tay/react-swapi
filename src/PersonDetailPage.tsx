import {Link, useLoaderData} from "react-router-dom";
import {fetchPerson} from "./api";
import Navbar from "./Navbar";
import {getResourceIdFromUrl} from "./utils";
import React from "react";

// @ts-ignore
export function personDetailPageLoader({params}) {
    return fetchPerson(params.personId);
}

const PersonFilmsCard = ({person}: { person: Person }) => {
    return <ul>
        {person.films.map((filmUrl) => {
            const filmId = getResourceIdFromUrl(filmUrl);
            return <li key={filmId}><Link to={`/films/${filmId}`}>Film #{filmId}</Link></li>;
        })}
    </ul>
}

const PersonDetailPage = () => {
    // @ts-ignore
    const person: Person = useLoaderData();

    return <div>
        <Navbar/>
        <h1>{person.name}</h1>
        Eye color: {person.eye_color}
        <PersonFilmsCard person={person}/>
    </div>
}

export default PersonDetailPage;
