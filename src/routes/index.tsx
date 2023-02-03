import { useRoutes } from 'react-router-dom'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'
import { getAuth } from '../lib/auth'

export const AppRoutes = () => {
    const authorized = getAuth()
    //change true to false to check verification pages
    const routes = authorized ? protectedRoutes : publicRoutes

    const element = useRoutes([...routes])

    return <>{element}</>
}