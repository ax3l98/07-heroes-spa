// React Router Dom
import { Route, Routes } from "react-router-dom"

// NavBar
import { Navbar } from "../ui"

// Pages JSX
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"

// Router
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
    return (
        <>
            <Routes>    
                {/* <Route path="login" element={<LoginPage />} /> */}
                <Route path="login/*" element={
                    <PublicRoute>
                        {/* <LoginPage /> */} {/* Funciona igual que la manera de abajo */}
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                } />

                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
