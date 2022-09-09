import { ADD_PANIER } from "../type";
import { existItem } from "../../common/fonctions";

const initStatePanier = [];

export default function (state = initStatePanier, action) {

    if (action.type == ADD_PANIER) {

        // return nextState

        return !existItem (state, action.payload.id)?[...state, action.payload]: state
        
    } else {
        
        return state
    }
}