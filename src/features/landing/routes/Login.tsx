import { LoginForm } from "../components/LoginForm"
import { setAuth } from "../../../lib/auth";

export const Login = () => {

    return (
        <LoginForm verify={async () => {
            await setAuth()
            }} />
    )
}