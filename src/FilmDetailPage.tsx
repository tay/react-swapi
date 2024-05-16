import {useLoaderData} from "react-router-dom";
import {fetchFilm} from "./api";
import Navbar from "./Navbar";

// @ts-ignore
export function filmDetailPageLoader({params}) {
    return fetchFilm(params.filmId);
}

const FilmDetailPage = () => {
    // @ts-ignore
    const film: Film = useLoaderData();

    return <div>
        <Navbar/>
        <h1>{film.title}</h1>
        Insert more info about film here
    </div>
}

export default FilmDetailPage;
