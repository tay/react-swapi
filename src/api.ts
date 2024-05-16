const API_URL = 'https://swapi.dev/api'

const fetchFilms = async () => {
    const response = await fetch(`${API_URL}/films`)
    return response;
}

// @ts-ignore
const fetchFilm = async (filmId) => {
    const response = await fetch(`${API_URL}/films/${filmId}`)
    return response;
}

const fetchPersons = async () => {
    const response = await fetch(`${API_URL}/people`)
    return response;
}

// @ts-ignore
const fetchPerson = async (personId) => {
    const response = await fetch(`${API_URL}/people/${personId}`)
    return response;
}

export {
    fetchFilms,
    fetchFilm,
    fetchPersons,
    fetchPerson,
}