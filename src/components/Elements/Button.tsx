type ButtonProps = {
    className?: string
    type?: "button" | "submit"
    name?: string
    onClick?: () => void
    children?: React.ReactElement<any, any>
}

export const Button = ({ 
    className, type = 'button', name, onClick, children
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {name}
            {children}
        </button>
    )  
}