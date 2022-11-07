import './NewProductInput.css';

function NewProductInput(props) {
  
  const styles = { width: props.width, height: props.height }

return (
  <div className='np-input-container'>
    <label className='np-label' htmlFor={props.id}>{props.text}</label>
    <input className='np-input' style={styles} min={1} pattern="^[0-9]+" type={props.type} name={props.id} />
  </div>
);
}

export default NewProductInput;