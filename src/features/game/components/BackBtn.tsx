import { useNavigate } from "react-router"
import { Button } from "../../../components"

export const BackBtn = () => {
    const nav = useNavigate()

    const handleBack = () => {
        nav(-1)
    }

    return (
        <Button type='button' onClick={()=>{handleBack()}} name='<- Back'/>
    )
}