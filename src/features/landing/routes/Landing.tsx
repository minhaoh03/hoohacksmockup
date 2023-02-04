import { useNavigate } from "react-router"
import { Button, Img } from "../../../components"

export const Landing = () => {
    const landingPageGif = require('../../../assets/landingPageGif.gif')
    const nav = useNavigate()

    const handleLogin = () => {
        nav('login/')
    }

    const handleRegister = () => {
        nav('register/')
    }

    return (
        <div className="bg-emerald-200 h-screen w-full">
            <div className="flex flex-col text-white items-center font-montser text-5xl font-bold h-[75%] w-full">
                <Img src={landingPageGif} alt='gif' className="scale-75"/>
                <span className="">Get Out</span>
            </div>
            <div className="flex flex-col items-center justify-items-start">
                <Button name='Login' onClick={()=>{handleLogin()}} className='bg-emerald-500/[.7] font-montser font-bold text-white px-4 py-2 rounded-full mb-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300'/>
                <Button name='Register' onClick={()=>{handleRegister()}} className='bg-emerald-500/[.7] font-montser font-bold text-white px-4 py-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300'/>
            </div>
        </div>
        
    )
}