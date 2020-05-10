import React from "react"
import { Modal, Button } from 'react-bootstrap'
import "./style.css"

function DrawModal(props) {

  return (<>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Draw</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='card-img-top h-auto' src={props.image} alt={props.alt} />
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="dark" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

  </>)
}
export default DrawModal