import { GameRoutes } from "../features/game/routes"

export const protectedRoutes = [
    {
        path: '/game',
        element: <GameRoutes/>
    }
]