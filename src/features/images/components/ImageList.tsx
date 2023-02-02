import { Img } from "../../../components"

export const ImageList = () => {
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

    return (
        <div className="flex flex-wrap items-center justify-items-center h-[45%] w-full overscroll-contain">
            {imgs.map((img) => {return (<Img src={img} alt={'idk'} className={'ml-[6.25%] mt-8 w-1/4 h-[w-1/4] object-cover'}/>)})}
        </div>
    )
}