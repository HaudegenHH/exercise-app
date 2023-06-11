export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

// url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
// url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);

    // when instead axios you are using the build-in fetch api
    // you have to extract the data from the response
    const data = await response.json()

    return data;
}