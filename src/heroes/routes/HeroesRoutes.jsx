// React Router Dom
import { Navigate, Route, Routes } from "react-router-dom"

// Componentes jsx
import { Navbar } from "../../ui/components/Navbar"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />}></Route>
                    <Route path="dc" element={<DcPage />}></Route>
                    <Route path="search" element={<SearchPage />}></Route>
                    <Route path="hero/:id" element={<HeroPage />}></Route>
                
                    {/* Search, Hero by id */}
                
                    <Route path="/" element={<Navigate to="/marvel" />}></Route>
                </Routes>
            </div>
        </>
    )
}
