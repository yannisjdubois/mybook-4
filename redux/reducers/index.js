import {combineReducers} from "redux";

import login from "./login";

import nombre from "./nombre";

import dataCategorie from "./dataCategorie";

import dataArticle from "./dataArticle";

import dataPanier from "./dataPanier";

export default combineReducers({login, nombre, dataCategorie, dataArticle, dataPanier});