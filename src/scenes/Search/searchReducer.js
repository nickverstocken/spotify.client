import { SEARCH_ARTISTS, FIRST_ARTIST } from "./actionsTypes";

const initialState = {
    artists: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ARTISTS:
            return {
                ...state,
                artists: action.payload
            };
        case FIRST_ARTIST:
            return {
                ...state,
                artist: action.payload
            }
        default:
            return state;
    }
}