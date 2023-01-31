import { Route, Routes } from 'react-router-dom'

import { Game } from './Game'

export const GameRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Game/>}/>
        </Routes>
    )
}