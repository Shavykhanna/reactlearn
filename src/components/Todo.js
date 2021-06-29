/* naming custom function begins with capital letter beacause of react rules and easy identification */
function Todo(props) {

function deleteHandler() {
    console.log('Clicked!');
    console.log(props.text);
}
return (
    <div className="card">
      <h2> {props.text} </h2>
      <div className="actions">
           {/* document.querySelector('button').addEventListener('click');  */}
        <button className="btn" onClick={deleteHandler}> Delete </button>
      </div>
    </div>
);
}
/* making function accessible by outside files and folders */
export default Todo;