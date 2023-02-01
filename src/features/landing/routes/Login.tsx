import { useNavigate } from "react-router-dom";

import { EmailForm } from "../components/EmailForm"

export const Login = () => {
    const navigate = useNavigate();

    return (
        <EmailForm onSuccess={() => navigate('/verification')} />
    )
}