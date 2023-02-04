import { Button } from '../../../components/Elements'
import { Form, InputField } from '../../../components/Form'

import { useNavigate } from 'react-router-dom'

type LoginFormProps = {
    verify: () => void,
}

export const LoginForm = ({ verify }: LoginFormProps) => {
    const nav = useNavigate()

    return (
        <Form onSubmit = {async () => {
            verify()
            nav('/game')
        }}>
            <div className='flex flex-col items-center pt-[120px]'>
                <span className='font-montser text-4xl mb-20'>Welcome Back</span>
                <label className="font-montser mr-[150px] mb-2">Username</label>
                <InputField 
                    type='text'
                    title='username'
                    className='rounded-full border-4 border-sky-500 bg-white font-montser py-2 px-4 mb-10 outline-0'
                />
                <label className="font-montser mr-[150px] mb-2">Password</label>
                <InputField 
                    type='password'
                    title='password'
                    className='rounded-full border-4 border-sky-500 bg-white font-montser py-2 px-4 mb-10 outline-0'
                />
                <Button 
                    type='submit'
                    name='Join'
                    className='bg-sky-500/[.7] font-montser font-bold text-white px-4 py-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300'
                />
            </div>
        </Form>
    )
}