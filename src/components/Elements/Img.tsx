type ImgProps = {
    src: string
    alt: string
    className?: string
    onClick?: () => void | void
}

export const Img = ({src, alt, className, onClick}: ImgProps) => {
    return (
        <img src={src} alt={alt} className={className} onClick={onClick}></img>
    )
}