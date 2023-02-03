type MenuTypeProps = {
    name: string
    onClick?: ()=>void
}

export const MenuItem = ({name, onClick}: MenuTypeProps) => {
    return (
        <li className="bg-white px-2 py-1 rounded-md font-mono hover:cursor-pointer" onClick={onClick}>{name}</li>
    )
}