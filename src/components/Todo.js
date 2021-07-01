import { useState } from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

/* naming custom function begins with capital letter beacause of react rules and easy identification */
function Todo(props) {
    const [modalIsOpen,setModelIsOpen] = useState(false);

function deleteHandler() {
    setModelIsOpen(true);
}

function closeModalHandler() {
  setModelIsOpen(false);
}
return (
  <div className="card">
    <h2> {props.text} </h2>
    <div className="actions">
      {/* document.querySelector('button').addEventListener('click');  */}
      <button className="btn" onClick={deleteHandler}>
        {" "}
        Delete{" "}
      </button>
    </div>
    {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
    {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
  </div>
);
}
/* making function accessible by outside files and folders */
export default Todo;