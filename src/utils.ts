export const getResourceIdFromUrl = (url: string) => {
    return url.split('/').slice(-2, -1)[0];
}
