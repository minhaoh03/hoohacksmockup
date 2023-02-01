import React from 'react';

type FormProps = {
    children: React.ReactNode
    onSubmit: () => 
}

export const Form = ({
    children,
}: FormProps) => {
    return (
        <form>
            {children}
        </form>
    )
}
