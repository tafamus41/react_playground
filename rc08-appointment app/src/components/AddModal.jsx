
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({handleClose,show,drName}) {
const [name, setName] = useState("")
const [date, setDate] = useState("")

  return (
    <>
      <Modal
        show={show} onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control onChange={(e)=>setDate(e.target.value)} type="datetime-local" placeholder="Date" />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="success" className="me-2">
                Save
              </Button>
              <Button
                type="button"
                variant="danger"
                //   onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
