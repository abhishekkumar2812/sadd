import {
    SUBSCRIBE_FAIL,
    SUBSCRIBE_SUCCESS
} from "../actions/types";

const initialState = {
    user: null,
    subscribed: false
};

export default function (state = initialState, action){
    switch(action.type){
        case SUBSCRIBE_SUCCESS:
            return{
                ...state,
                ...action.payload,
                subscribed: true
            };
        case SUBSCRIBE_FAIL:
            return{
                ...state,
                user: null,
                subscribed: false
            }    
        default:
            return state;
    }
}