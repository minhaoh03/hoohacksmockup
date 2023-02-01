import { Button } from '../../../components/Elements'
import { Form, InputField } from '../../../components/Form'

type EmailFormProps = {
    onSuccess: () => void,
}

export const EmailForm = (props: EmailFormProps) => {
    return (
        <div>
            <Form>
                <InputField />
            </Form>
            <Button/>
        </div>
    )
}