import { Route, Routes } from 'react-router-dom'

import { Game } from './Game'
import { Logout } from '../../landing/routes/Logout'
import { Leaderboard } from './Leaderboard'
import { Profile } from './Profile'

export const GameRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Game/>}/>
            <Route path="leaderboard/" element={<Leaderboard/>}/>
            <Route path="profile/" element={<Profile/>}/>
            <Route path="logout/" element={<Logout/>} />
        </Routes>
    )
}