/* naming custom function begins with capital letter beacause of react rules and easy identification */
function Modal(props) {

  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
 
  return (
    <div className="modal">
      <p className="ques">Are you sure?</p>
      <button className="btn btn --alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onclick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
    }
/* making function accessible by outside files and folders */
export default Modal;
