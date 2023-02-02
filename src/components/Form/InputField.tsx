type InputFieldProps = {
    type: 'text' | 'password' | 'file' 
    className?: string
    placeholder?: string
    title?: string
}

export const InputField = ({
    type,
    className,
    placeholder,
    title
}: InputFieldProps) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            title={title}
        />
    )
}