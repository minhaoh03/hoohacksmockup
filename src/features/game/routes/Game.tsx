import { Map } from '../../map'
import { ImageList } from '../../images'
import { Img } from '../../../components';
import { Modal } from '@mui/material';
import { useState } from 'react';
import { ImageModal } from '../../../components/Modals';

export const Game = () => {
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState({
        img: 'unknown'
    })

    return (
        <div className='h-content'>
            <ImageModal open={open} info={info}/>
            <Map/>
            <ImageList open={open} setModalOpen={setOpen} setModalInfo={setInfo}/>
        </div>
    )
}