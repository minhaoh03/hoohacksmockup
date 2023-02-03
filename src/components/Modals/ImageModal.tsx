import { Img } from "../Elements"
import React, { useState } from "react"
import { DescModal } from "./DescModal"
import { Button } from "../Elements"

type ImageModalProps = {
    open: boolean
    info: {
        src: string
        desc: string
        date: Date
    }
    setModalOpen: (value: boolean) => void
}

export const ImageModal = ({ open, info, setModalOpen }: ImageModalProps) => {
    const [descOpen, setDescOpen] = useState(false)
    
    if(open) {
        return (
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-[9/16] h-[80%] z-20'>
                <Button type='button' name='X' onClick={() => {setModalOpen(!open)}} className="absolute top-[0%] left-[5px]"/>
                <Img src={info.src} onClick={() => {setDescOpen(!descOpen)}} className={'h-full w-full'} alt='Clicked on image' />
                <DescModal info={info} descOpen={descOpen} setDescOpen={setDescOpen}/>
            </div>
        )
    } else {
        return null
    }
}