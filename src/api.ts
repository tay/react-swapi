const fetchFilms = async () => {
    const response = await fetch('https://swapi.dev/api/films/')
    return response;
}

// @ts-ignore
const fetchFilm = async (filmId) => {
    const response = await fetch(`https://swapi.dev/api/films/${filmId}`)
    return response;
}

const fetchPersons = async () => {
    const response = await fetch('https://swapi.dev/api/people/')
    return response;
}

// @ts-ignore
const fetchPerson = async (personId) => {
    const response = await fetch(`https://swapi.dev/api/people/${personId}`)
    return response;
}

export {
    fetchFilms,
    fetchFilm,
    fetchPersons,
    fetchPerson,
}