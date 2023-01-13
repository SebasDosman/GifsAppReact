export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jQhs2msstYsTMGVKQTi5gkNXl6M62Vh3&q=${ encodeURI(category) }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));

    return gifs;
};
