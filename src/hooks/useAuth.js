import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

function useAuth() {
    const { authState, setAccessToken, logout } = useContext(AuthContext);

    return { authState, setAccessToken, logout };
}

export default useAuth;