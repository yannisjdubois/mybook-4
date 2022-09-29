import { ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER } from "../type";
import { existItem } from "../../common/fonctions";

const initStatePanier = [];

export default function (state = initStatePanier, action) {

    switch (action.type) {
        case ADD_PANIER :

            console.log("action.payload", action.payload)

            // Vérifier que l'élément avec ID n'existe pas pour la création

            if ( !existItem (state, action.payload.id) ) {

                //  ... déstructure action.payload
                const item = { ...action.payload, quantite: 1 }

                return [...state, item]
                
            } else {

                // find item by id payload for get quantite value
                const findItem = state.find( item => item.id == action.payload.id) ;

                // find index of item by id payload for get quantite value
                const indexItem = state.findIndex( item => item.id == action.payload.id) ;

                const newItem = { ...findItem, quantite:findItem.quantite + 1} ;

                
                // Transformation du state immutable en state mutable avec fonction let
                let newState = state ;

                // création d'un tableau modifiable afin de modifier la valeur précédente
                newState[indexItem] = newState ;

                return newState ;
            }

            // return nextState

            // return !existItem (state, action.payload.id)?[...state, action.payload]: state
            
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