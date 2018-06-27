import { FETCH_ARTIST, FETCH_TOP_TRACKS, FETCH_RELATED } from "./actionsTypes";

const initialState = {
    related: [],
    artist: {},
    tracks: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_RELATED:
            return {
                ...state,
                related: action.payload
            };
        case FETCH_ARTIST:
            return {
                ...state,
                artist: action.payload
            };
        case FETCH_TOP_TRACKS:
            return {
                ...state,
                tracks: action.payload
            }
        default:
            return state;
    }
}