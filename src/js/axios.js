const axios = require('axios').default;

export async function fetchImages(name, page) {
  const baseURL = 'https://pixabay.com/api/';
  const key = '30369745-b5fd7cc2ec76e6714aeeb802f';

  try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
