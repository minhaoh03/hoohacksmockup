import { useRoutes } from 'react-router-dom'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

export const AppRoutes = () => {

    //change true to false to check verification pages
    const routes = true ? protectedRoutes : publicRoutes

    const element = useRoutes([...routes])

    return <>{element}</>
}