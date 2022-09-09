import { ADD_CATEGORIE } from "../type";
import { existItem } from "../../common/fonctions";

const initStateCategories = [];

export default function (state = initStateCategories, action) {

    if (action.type == ADD_CATEGORIE) {

        // return nextState

        // if (state.find (item => item.id == action.payload.id) == undefined) {

        //Destructuration du state précédent et mise à jour de la nouvelle state via action.payload
        // return [...state, action.payload];
        // }

        return !existItem (state, action.payload.id)?[...state, action.payload]: state

    } else {
        
        return state ;
    }
}