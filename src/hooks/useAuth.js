import { useContext } from "react"
import { AuthContext } from "../Pages/Context/AuthProvider"

const useAuth=()=>{
    const Auth =useContext(AuthContext);
    return Auth;
}
export default useAuth;