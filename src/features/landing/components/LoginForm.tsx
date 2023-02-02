import { Button } from '../../../components/Elements'
import { Form, InputField } from '../../../components/Form'

import { useNavigate } from 'react-router-dom'

type LoginFormProps = {
    verify: () => void,
}

export const LoginForm = ({ verify }: LoginFormProps) => {
    const nav = useNavigate()

    return (
        <div>
            <Form onSubmit = {async () => {
                verify()
                nav('/game')
            }}>
                <div>
                    <InputField 
                        type='text'
                        placeholder='Username'
                        title='username'
                    />
                    <InputField 
                        type='password'
                        placeholder='Password'
                        title='password'
                    />
                    <Button 
                        type='submit'
                        name='Join'
                    />
                </div>
            </Form>
            
        </div>
    )
}