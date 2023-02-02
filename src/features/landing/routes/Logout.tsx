import { useEffect } from "react"
import { removeAuth } from "../../../lib/auth/removeAuth"
import { useNavigate } from "react-router-dom"

export const Logout = () => {
    const nav = useNavigate()

    useEffect(() => {
        removeAuth()
        nav('/')
    }, [nav])

    return (
        <span> Loading </span>
    )
}