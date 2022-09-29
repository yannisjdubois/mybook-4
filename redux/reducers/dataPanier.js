import { ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER } from "../type";
import { existItem } from "../../common/fonctions";

const initStatePanier = [];

export default function (state = initStatePanier, action) {

    switch (action.type) {
        case ADD_PANIER :

            // return nextState

            return !existItem (state, action.payload.id)?[...state, action.payload]: state
            
            break;

        case REMOVE_PANIER : // vider le panier

            return action.payload ;
            
            break;

        case REMOVE_ONE_PANIER : // vider un élément du panier

        // 1 - Rechercher la position de l'élément
        // 2 - Supprimer l'élément dans le tableau

        
        return state.filter(item => item.id != action.payload.id) ;

            break;
    
        default:

            return state ;

            break;
    }

}