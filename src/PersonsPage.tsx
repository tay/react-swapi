import React from "react";
import {Link, useLoaderData} from "react-router-dom";
import {Helmet} from "react-helmet-async";

import {getResourceIdFromUrl} from "./utils";
import {getPersons} from "./data";
import Navbar from "./Navbar";


type PersonPageLoaderType = { results: Person[] };
export function personsPageLoader() {
    return getPersons();
}

const PersonsListItem = ({person}: { person: Person }) => {
    const personId = getResourceIdFromUrl(person.url);

    return <li>
        <Link to={`/persons/${personId}`}>{person.name}</Link>
    </li>
}

const PersonsPage = () => {
    const persons = (useLoaderData() as PersonPageLoaderType).results;

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
