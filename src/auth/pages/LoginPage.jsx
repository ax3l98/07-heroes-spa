// React Router Dom
import { useNavigate } from "react-router-dom";

// Hooks React
import { useContext } from "react";

// AuthContext
import { AuthContext } from "../context";


export const LoginPage = () => {

    const {login} = useContext(AuthContext)

    const navigate = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Axel Coronado');

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                <hr />

                <button
                    className="btn btn-primary"
                    onClick={onLogin}
                >Login</button>
            </div>
        </>
    )
}
