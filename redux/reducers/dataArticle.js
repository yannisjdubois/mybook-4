import { ADD_ARTICLE } from "../type";
import { existItem } from "../../common/fonctions";

const initStateArticles = [];

export default function (state = initStateArticles, action) {

    if (action.type == ADD_ARTICLE) {

        // return nextState

        return !existItem (state, action.payload.id)?[...state, action.payload]: state
        
    } else {
        
        return state
    }
}