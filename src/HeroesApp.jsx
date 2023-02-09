// Routers
import { AppRouter } from "./router/AppRouter"

// AuthProvider
import { AuthProvider } from "./auth"

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
