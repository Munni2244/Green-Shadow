import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const Initialization=()=>{
    initializeApp(firebaseConfig);
}
export default Initialization;