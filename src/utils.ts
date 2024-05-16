export const getResourceIdFromUrl = (url: string) => {
    return parseInt(url.split('/').slice(-2, -1)[0]);
}
