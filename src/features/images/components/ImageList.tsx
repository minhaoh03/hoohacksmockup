import { Img } from "../../../components"

type ImageListProps = {
    open: boolean
    setModalOpen: (value: boolean) => void
    setModalInfo: (value: {
        src: string
        desc: string
        date: Date
    }) => void
}

export const ImageList = ({open, setModalOpen, setModalInfo}: ImageListProps) => {
    const imgs = [{
        src: 'https://wallpaperaccess.com/full/889706.jpg',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    }, 
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoGOlWenUAjye9KrOVktxWUEvUckUOP1yiQ&usqp=CAU',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },
    {
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },
    {
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },{
        src: 'https://via.placeholder.com/90x160',
        desc: 'this is the desc',
        date: new Date("2015-03-25")
    },
    ]

    const handleModal = (img: {
        src: string
        desc: string
        date: Date
    }) => {
        setModalInfo({
            src: img.src,
            desc: img.desc,
            date: img.date,
        })
        setModalOpen(!open)
    }

    return (
        <div className="flex flex-wrap items-center justify-items-center h-[45%] w-full overscroll-contain bg-emerald-200/[.5]">
            {imgs.map((img, index) => {return (<Img src={img.src} alt={'idk'} key={index} onClick={() => {handleModal(img)}} className={'ml-[6.25%] mt-8 w-1/4 aspect-square object-cover border-4 rounded-xl border-sky-200'}/>)})}
        </div>
    )
}