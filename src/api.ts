const API_URL = 'https://swapi.dev/api'

const films = new Map<string, Film>();
const persons = new Map<string, Person>();

const fetchFilms = async () => {
    const response = await fetch(`${API_URL}/films`);
    return response;
}

// @ts-ignore
const fetchFilm = async (filmId: string): Promise<Film> => {
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
const fetchPerson = async (personId: string): Promise<Person> => {
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