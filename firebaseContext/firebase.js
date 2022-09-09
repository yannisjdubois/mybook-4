import firestore from '@react-native-firebase/firestore';


class Firebase {

    firestore;

    constructor () {
        this.firestore = firestore ();
    }

    getCategories = () => this.firestore.collection("Categories").get();
    getArticles = () => this.firestore.collection("Articles").get();

    //Récupérere un article
    getArticleById = (id) => this.firestore.collection("Articles").doc(id).get();
}
export default Firebase;