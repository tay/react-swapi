import React from "react";
import {NavLink, useLoaderData} from "react-router-dom";

import {getResourceIdFromUrl} from "./utils";
import {fetchPersons} from "./api";
import Navbar from "./Navbar";
import {Helmet} from "react-helmet-async";


export function personsPageLoader() {
    return fetchPersons();
}

const PersonsListItem = ({person}: { person: Person }) => {
    const personId = getResourceIdFromUrl(person.url);

    return <li>
        <NavLink to={`/persons/${personId}`}>{person.name}</NavLink>
    </li>
}

const PersonsPage = () => {
    // @ts-ignore
    const persons: Person[] = useLoaderData().results as Person[];

    return <div>
        <Helmet><title>SWAPI | People</title></Helmet>
        <Navbar/>

        <h1>People</h1>
        <ul>
            {persons.map((person, i) =>
                <PersonsListItem person={person} key={i}/>)}
        </ul>
    </div>
}

export default PersonsPage;
