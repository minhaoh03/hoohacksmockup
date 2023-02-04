import { Routes, Route } from 'react-router-dom'

import { Login } from './Login'
import { Register } from './Register'
import { Landing } from './Landing'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Landing/>} />
            <Route path="login/" element={<Login/>} />
            <Route path="register/" element={<Register/>} />
        </Routes>
    )
}