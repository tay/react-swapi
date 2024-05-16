import {Link, useLoaderData} from "react-router-dom";
import {fetchPersons} from "./api";
import React from "react";
import Navbar from "./Navbar";

export function personsPageLoader() {
    return fetchPersons();
}

const PersonsListItem = ({person}: { person: Person }) => {
    const personId = person.url.split('/').slice(-2, -1);

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
