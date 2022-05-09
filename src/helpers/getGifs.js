export  const getGifs = async (categories) => {
    const apiKey = 'BlQKaIHsZgzFB9mqsALNWUNx3VP1N6dW'

    const url = `https://api.giphy.com/v1/gifs/search?q=${categories}&limit=10&api_key=${apiKey}`
    const resp = await fetch(url);
    const { data } = await resp.json()

    return data.map(img => {
        return {
            id: img?.id,
            title: img?.title,
            url: img.images?.downsized_large?.url
        }
    })
}