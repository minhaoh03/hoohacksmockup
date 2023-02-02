import { Route, Routes } from 'react-router-dom'

import { Game } from './Game'
import { Logout } from '../../landing/routes/Logout'

export const GameRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Game/>}/>
            <Route path="logout/" element={<Logout/>} />
        </Routes>
    )
}