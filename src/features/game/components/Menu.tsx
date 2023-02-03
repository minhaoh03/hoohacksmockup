import { Button, Img } from "../../../components"
import { useState } from "react"
import { MenuItem } from "./MenuItem"
import { useNavigate } from "react-router"

export const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuIcon = require('../../../assets/menuIcon.png')
    const nav = useNavigate()

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu)
    }

    const handleLeaderboard = () => {
        nav('leaderboard/')
    }

    const handleProfile = () => {
        nav('profile/')
    }

    const handleLogout = () => {
        nav('logout/')
    }

    return (
        <div>
            {openMenu && 
                <ul className="fixed bottom-[7%] right-[20px] z-40 border-[1px] border-gray-500 bg-white rounded-md">
                    <MenuItem name='Leaderboard' onClick={handleLeaderboard}/>
                    <MenuItem name='Profile' onClick={handleProfile}/>
                    <MenuItem name='Logout' onClick={handleLogout}/>
                </ul>}
            <Button type='button' onClick={()=>handleMenuOpen()} className='fixed bottom-[1%] right-[1%] z-30 bg-gray-100 rounded-full p-2'>
                <Img src={menuIcon} alt='menu icon'/>
            </Button>
        </div>
    )
}