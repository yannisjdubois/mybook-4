import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


class Firebase {

    firestore;
    auth ;

    constructor () {
        this.firestore = firestore ();
        this.auth = auth() ;
    }

    getCategories = () => this.firestore.collection("CategoriesYannis").get();
    getArticles = () => this.firestore.collection("ArticlesYannis").get();

    //Récupérere un article
    getArticleById = (id) => this.firestore.collection("ArticlesYannis").doc(id).get();
}
export default Firebase;