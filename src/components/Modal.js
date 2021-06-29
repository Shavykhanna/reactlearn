/* naming custom function begins with capital letter beacause of react rules and easy identification */
function Modal(props) {
 
  return (
  <div>
    <p>Are you sure?</p>
    <button className="btn btn --alt">Cancel</button>
    <button className="btn">Confirm</button>
  </div>
  );
    }
/* making function accessible by outside files and folders */
export default Modal;
