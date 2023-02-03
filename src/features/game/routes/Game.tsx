import { Map } from '../../map'
import { ImageList } from '../../images'
import { useState } from 'react';
import { ImageModal } from '../../../components/Modals';
import { Menu } from '../components/Menu';

export const Game = () => {
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState({
        src: 'unknown',
        desc: 'not yet implemented',
        date: new Date()
    })

    return (
        <div className='h-content'>
            <ImageModal open={open} info={info} setModalOpen={setOpen}/>
            <Map/>
            <ImageList open={open} setModalOpen={setOpen} setModalInfo={setInfo}/>
            <Menu/>
        </div>
    )
}