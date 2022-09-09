import { ADD_CATEGORIE, ADD_ARTICLE, EDIT_LOGIN, ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER } from "./type";

import { EDIT_NOMBRE } from "./type";

export const editLogin = (login) => ({

    type: EDIT_LOGIN,
    payload: login 
});

export const editNombre = (nombre) => ({
    type: EDIT_NOMBRE,
    payload: nombre
});

export const addCategorie = (categorie) => ({
    type: ADD_CATEGORIE,
    payload: categorie
});

export const addArticle = (article) => ({
    type: ADD_ARTICLE,
    payload: article
});

export const addPanier = (panier) => ({
    type: ADD_PANIER,
    payload: panier
});

export const removeOnePanier = (panier) => ({
    type: REMOVE_ONE_PANIER,
    payload: [panier]
});

export const removePanier = () => ({
    type: REMOVE_PANIER,
    payload: []
});