type ButtonProps = {
    className?: string
    type: "button" | "submit"
    name: string
}

export const Button = ({ 
    className, type, name
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={className}
        >
            {name}
        </button>
    )  
}