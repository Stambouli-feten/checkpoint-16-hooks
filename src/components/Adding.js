import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
function Adding(props) {
  const tab = ["image", "Title", "date", "description", "url", "rate"];
  const [newmovie, setNewmovie] = useState({
    Title: "",
    description: "",
    date: "",
    rate: "",
    url: "",
    image: "",
  });
  function handleadd() {
    props.add([...props.list, newmovie]);
    handleClose();
  }
  function handlechange(e) {
    setNewmovie({ ...newmovie, [e.target.id]: e.target.value });
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <>
        <Button variant="primary" onClick={handleShow}>
          add Movie
        </Button>
        {console.log(newmovie)}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {tab.map((el) => (
              <div>
                <label htmlFor="">{el} :</label>
                <input
                  id={el}
                  onChange={handlechange}
                  type="text"
                  placeholder={el}
                />
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleadd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default Adding;
