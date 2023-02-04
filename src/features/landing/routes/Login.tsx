import { LoginForm } from "../components/LoginForm"
import { setAuth } from "../../../lib/auth";

export const Login = () => {

    return (
        <div className="bg-sky-200 h-screen">
            <LoginForm verify={async () => {
                await setAuth()
            }} />
        </div>
    )
}