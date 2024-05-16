import React from "react";
import {Link, useLoaderData} from "react-router-dom";

import {getResourceIdFromUrl} from "./utils";
import {fetchPersons} from "./api";
import Navbar from "./Navbar";


export function personsPageLoader() {
    return fetchPersons();
}

const PersonsListItem = ({person}: { person: Person }) => {
    const personId = getResourceIdFromUrl(person.url);

    return <li>
        <Link to={`/persons/${personId}`}>{person.name}</Link>
    </li>
}

const PersonsPage = () => {
    // @ts-ignore
    const persons: Person[] = useLoaderData().results as Array<Person>;

    return <div>
        <Navbar/>
        <ul>
            {persons.map((person, i) =>
                <PersonsListItem person={person} key={i}/>)}
        </ul>
    </div>
}

export default PersonsPage;
