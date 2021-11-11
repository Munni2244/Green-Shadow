import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Initialization from "../Pages/Firebase/Firebase.init";

Initialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    /// create register app
    const register = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email, displayName: name }
                setUser(newUser)
                // history.replace('/')

            })
            .catch((error) => {
               console.log(error.message);
                // ..
            });
    }

    /// login user
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
            console.log(result.user);
                // const destination= location?.state?.from || '/';
                // history.replace(destination);
            })
            .catch((error) => {
            console.log(error.message);
            });
    }

    ///on state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unSubscribe;

    }, [])

      ///sign out
      const logOut=()=>{
        signOut(auth).then(() => {
        //  setUser({})
           }).catch((error) => {

          })
          .finally(()=> setLoading(false));

    }

    return {
        user,
        register,
        loading,
        loginUser,
        logOut

    }
}
export default useFirebase;