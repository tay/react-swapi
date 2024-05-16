const API_URL = 'https://swapi.dev/api'

const films = new Map<number, any>;
const persons = new Map<number, any>;

const fetchFilms = async () => {
    const response = await fetch(`${API_URL}/films`)
    return response;
}

// @ts-ignore
const fetchFilm = async (filmId) => {
    if (films.has(filmId)) {
        return films.get(filmId);
    }
    const response = await fetch(`${API_URL}/films/${filmId}`)
    const film = response.json()
    films.set(filmId, film)
    return film;
}

const fetchPersons = async () => {
    const response = await fetch(`${API_URL}/people`)
    return response;
}

// @ts-ignore
const fetchPerson = async (personId) => {
    if (persons.has(personId)) {
        return persons.get(personId);
    }

    const response = await fetch(`${API_URL}/people/${personId}`)
    const person = response.json();
    persons.set(personId, person);
    return person;
}

export {
    fetchFilms,
    fetchFilm,
    fetchPersons,
    fetchPerson,
}