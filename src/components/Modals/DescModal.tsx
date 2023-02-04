import React from "react"
import { Button, Img } from "../Elements"
import { Form } from "../Form"
import { InputField } from "../Form"

type DescModalProps = {
    info: {
        src: string
        desc: string
        date: Date
    }
    descOpen: boolean
    setDescOpen: (value: boolean) => void
}

export const DescModal = ({info, descOpen, setDescOpen}: DescModalProps) => {

    const handleUpload = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        document.getElementById('imageInput')!.click();
    }

    const handleSubmit = () => {
        //api submissions
    }

    if(descOpen) {
        return (
            <div className="absolute z-40 w-full top-[60%] h-[40%] text-white bg-black/[.5] rounded-b-xl z-10 font-lato pt-4 px-3" onClick={() => {setDescOpen(!descOpen)}}>
                <span className="block text-4xl mb-10">{info.desc}</span>

                <span className="block bottom-5px">{info.date.toString()}</span>
                <Form onSubmit={() => handleSubmit()}>
                    <>
                        <Img src='https://cdn-icons-png.flaticon.com/512/2810/2810451.png' alt='upload button' onClick={(e: React.MouseEvent<HTMLElement>) => {handleUpload(e)}} className="absolute w-12 h-12 bottom-[10%] left-1/2 transform -translate-x-1/2 z-30"/>
                        <InputField type='file' id='imageInput' className="hidden"/>
                    </>
                </Form>
                
            </div>
        )
    } else {
        return null;
    }
}