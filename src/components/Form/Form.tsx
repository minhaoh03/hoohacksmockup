import React from 'react';
import { useForm, UseFormProps } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';

type FormProps<TFormValues extends FieldValues> = {
    children: React.ReactElement<any, any>
    onSubmit: SubmitHandler<TFormValues>
    options?: UseFormProps<TFormValues>
    className?: string
}

export const Form = <
    TFormValues extends FieldValues
>({
    children,
    onSubmit,
    options,
    className
}: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>({...options});

    return (
        <form onSubmit = {methods.handleSubmit(onSubmit)} className={className}>
            {children}
        </form>
    )
}
