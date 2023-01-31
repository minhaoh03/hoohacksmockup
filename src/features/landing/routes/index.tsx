import { Routes, Route } from 'react-router-dom'

import { Login } from './Login'
import { Verification } from './Verification'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Login/>} />
            <Route path="verification/" element={<Verification/>} />
        </Routes>
    )
}