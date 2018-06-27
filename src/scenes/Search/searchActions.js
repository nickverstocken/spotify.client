import { SEARCH_ARTISTS, FIRST_ARTIST } from "./actionsTypes";

export const searchArtists = (searchValue) => dispatch => {
        if(searchValue) {
            fetch(`https://api.spotify.com/v1/search?q=${searchValue}&type=artist&limit=5&market=US`, {
                headers: new Headers({
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                })
            })
                .then(res => res.json())
                .then(data => dispatch({
                    type: SEARCH_ARTISTS,
                    payload: data.artists.items
                }));
        }else{
            dispatch({
               type: SEARCH_ARTISTS,
                payload: []
            });
        }
};

export const firstArtist = (artist) => dispatch => {
  dispatch({
      type: FIRST_ARTIST,
      payload: artist
  })
};