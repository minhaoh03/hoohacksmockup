import { useNavigate } from "react-router-dom"
import { Form, InputField, Button } from "../../../components"
import { setAuth } from "../../../lib/auth"

export const RegisterForm = () => {
    const nav = useNavigate()
    return (
        <Form onSubmit = {() => {
            setAuth()
            nav('/game')
        }}>
            <div>
                <InputField 
                    type='text'
                    placeholder='Username'
                    title='email'
                />
                <InputField 
                    type='password'
                    placeholder='Password'
                    title='email'
                />
                <Button 
                    type='submit'
                    name='Register'
                />
            </div>
        </Form>
    )
}