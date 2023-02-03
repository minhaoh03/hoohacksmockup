import { Img } from "../Elements"
import React, { SyntheticEvent } from "react"

type ImageModalProps = {
    open: boolean
    info: {
        img: string
    }
}

export const ImageModal = ({ open, info }: ImageModalProps) => {
    const clickRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
    function handleClickOutside(event: Event) {
        if (clickRef.current && !clickRef.current.contains(event.target as Node)) {
            alert("You clicked outside of me!");
        }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return (
        <div ref={clickRef} className='fixed top-[7.5%] left-[7.5%] h-[95%] w-[95%] z-20'>
            {open && <Img src={info.img} className={'h-[90%] w-[90%]'} alt='Clicked on image' />}
        </div>
    )
}