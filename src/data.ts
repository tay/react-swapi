import {getResourceIdFromUrl} from "./utils";

const API_URL = 'https://swapi.dev/api'

// TODO: Memoize not explicitly
const films = new Map<string, Film>();
const persons = new Map<string, Person>();

const getFilm = async (filmId: string): Promise<Film> => {
    if (films.has(filmId)) {
        return films.get(filmId) as Film;
    }
    const response = await fetch(`${API_URL}/films/${filmId}`);
    const film = await response.json();
    films.set(filmId, film);
    return film;
}

const getFilmByUrl = async (filmUrl: string): Promise<Film> => {
    const filmId = getResourceIdFromUrl(filmUrl);
    return getFilm(filmId);
}

const getFilms = async () => {
    const response = await fetch(`${API_URL}/films`);
    return response;
}

const getPerson = async (personId: string): Promise<Person> => {
    if (persons.has(personId)) {
        return persons.get(personId) as Person;
    }

    const response = await fetch(`${API_URL}/people/${personId}`);
    const person = await response.json();
    persons.set(personId, person);
    return person;
}

const getPersonByUrl = async (personUrl: string): Promise<Person> => {
    const personId = getResourceIdFromUrl(personUrl);
    return getPerson(personId);
}

const getPersons = async () => {
    const response = await fetch(`${API_URL}/people`)
    return response;
}


export {
    getFilm,
    getFilmByUrl,
    getFilms,
    getPerson,
    getPersonByUrl,
    getPersons,
}