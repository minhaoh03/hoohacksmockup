import { UseFormReturn, useForm } from "react-hook-form"
import React from 'react';

type FormProps<TFormValues> = {
    children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
}

export const Form = <                                                           //Ya gotta understand what is going on here...
    TFormValues extends Record<string, unknown> = Record<string, unknown>
> ({
    children,
}: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>()
    return (
        <form> 
            {children(methods)}
        </form>
    )
}