import {FETCH_ARTIST, FETCH_TOP_TRACKS, FETCH_RELATED} from "./actionsTypes";

export const fetchArtist = (id) => dispatch => {
    fetch(`https://api.spotify.com/v1/artists/${id}`, {
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_ARTIST,
            payload: data
        }));
};

export const fetchTopSongs = (id) => dispatch => {
    fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`, {
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_TOP_TRACKS,
            payload: data.tracks
        }));
};

export const fetchRelated = (id) => dispatch => {
    fetch(`https://api.spotify.com/v1/artists/${id}/related-artist`, {
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_RELATED,
            payload: data.artists
        }));
};