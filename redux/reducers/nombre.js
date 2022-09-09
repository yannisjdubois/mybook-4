import { EDIT_NOMBRE } from "../type";

//Iniltialisation de la valeur du state login
const initStateNombre = 0;

export default function(state = initStateNombre, action) {
    switch (action.type) {

        case EDIT_NOMBRE: {
            
            return action.payload;
        }

        default:
            return state;
    }

 
}