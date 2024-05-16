const fetchFilms = async () => {
    const response = await fetch('https://swapi.dev/api/films/')
    return await response.json();
}

// @ts-ignore
const fetchFilm = async (filmId) => {
    const response = await fetch(`https://swapi.dev/api/films/${filmId}`)
    return await response.json();
}

const fetchPersons = async () => {
    const response = await fetch('https://swapi.dev/api/people/')
    return await response.json();
}

// @ts-ignore
const fetchPerson = async (personId) => {
    const response = await fetch(`https://swapi.dev/api/people/${personId}`)
    return await response.json();
}

export {
    fetchFilms,
    fetchFilm,
    fetchPersons,
    fetchPerson,
}