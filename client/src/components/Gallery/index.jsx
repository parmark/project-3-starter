import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap'
import './style.css'

function Gallery(props) {

    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState();
    const [loadBarWidth, setLoadBarWidth] = useState(); 

    const handleClose = () => setShow(false);
    const handleShow = (seconds) => {
        setShow(true);
        setCounter(seconds)
        setLoadBarWidth(seconds)
    }

    useEffect(() => {
        if(counter > 0) {
            const t = setTimeout(() => setCounter(counter - 1), 1000)
            if(show === false) {
                clearTimeout(t)
            }
        }
    }, [counter, show]);

    useEffect(() => {
        if (counter === 0) {
            handleClose();
        }
    })

    return (
        <div>
            <div className='image-holder'>
                {<img className='image' src={props.images} alt='upload'/>}
                <div className='btns'>
                    <button 
                        className='invis-btn'
                        onClick={() => {handleShow(60)}}
                    >
                        1 Min
                    </button>
                    <button        
                        className='invis-btn'
                        onClick={() => {handleShow(120)}}
                    >
                        2 Min
                    </button>
                    <button 
                        className='invis-btn'
                        onClick={() => {handleShow(300)}}
                    >
                        5 Min
                    </button>
                </div>
            </div>

            <Modal className='modalmodal' show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                        <img 
                            className="d-block w-100 modalContent"
                            src={props.images}
                            alt='timed slide'
                        />
                </Modal.Body>
                <Modal.Footer>
                    <span className='loading-bar' style={{width: loadBarWidth + 4}}>
                    <div className='loading-fill text-center' style={{width: loadBarWidth - counter}}>
                    </div>
                    </span>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Gallery;