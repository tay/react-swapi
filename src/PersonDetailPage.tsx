import {useLoaderData} from "react-router-dom";
import {fetchPerson} from "./api";
import Navbar from "./Navbar";

// @ts-ignore
export function personDetailPageLoader({params}) {
    return fetchPerson(params.personId);
}

const PersonDetailPage = () => {
    // @ts-ignore
    const person: Person = useLoaderData();

    return <div>
        <Navbar/>
        <h1>{person.name}</h1>
        Eye color: {person.eye_color}
    </div>
}

export default PersonDetailPage;
