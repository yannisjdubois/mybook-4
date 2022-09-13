import { ADD_ARTICLE, EDIT_USER } from "../type";


const initStateUser = null;

export default function (state = initStateUser, action) {

    if (action.type == EDIT_USER) {

        // return nextState

        return action.payload
        
    } else {
        
        return state
    }
}