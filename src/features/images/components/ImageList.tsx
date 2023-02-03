import { Img } from "../../../components"

type ImageListProps = {
    open: boolean
    setModalOpen: (value: boolean) => void
    setModalInfo: (value: {img: string}) => void
}

export const ImageList = ({open, setModalOpen, setModalInfo}: ImageListProps) => {
    const imgs = [
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
    ]

    const handleModal = (img: string) => {
        setModalInfo({
            img: img,
        })
        setModalOpen(!open)
        console.log(open)
    }

    return (
        <div className="flex flex-wrap items-center justify-items-center h-[45%] w-full overscroll-contain">
            {imgs.map((img, index) => {return (<Img src={img} alt={'idk'} key={index} onClick={() => {handleModal(img)}} className={'ml-[6.25%] mt-8 w-1/4 h-[w-1/4] object-cover'}/>)})}
        </div>
    )
}