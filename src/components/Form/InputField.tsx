type InputFieldProps = {
    type: 'text' | 'password' | 'file' | 'image'
    className?: string
    placeholder?: string
    title?: string
    src?: string
    onClick?: () => void
    id?: string
}

export const InputField = ({
    type,
    className,
    placeholder,
    title,
    src,
    onClick,
    id
}: InputFieldProps) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            title={title}
            src={src ? src : undefined}
            onClick={onClick}
            id={id}
        />
    )
}