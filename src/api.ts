const API_URL = 'https://swapi.dev/api'

const films = new Map<number, Film>();
const persons = new Map<number, Person>();

const fetchFilms = async () => {
    const response = await fetch(`${API_URL}/films`);
    return response;
}

// @ts-ignore
const fetchFilm = async (filmId): Promise<Film> => {
    if (films.has(filmId)) {
        return films.get(filmId) as Film;
    }
    const response = await fetch(`${API_URL}/films/${filmId}`);
    const film = await response.json();
    films.set(filmId, film);
    return film;
}

const fetchPersons = async () => {
    const response = await fetch(`${API_URL}/people`)
    return response;
}

// @ts-ignore
const fetchPerson = async (personId): Promise<Person> => {
    if (persons.has(personId)) {
        return persons.get(personId) as Person;
    }

    const response = await fetch(`${API_URL}/people/${personId}`);
    const person = await response.json();
    persons.set(personId, person);
    return person;
}

export {
    fetchFilms,
    fetchFilm,
    fetchPersons,
    fetchPerson,
}