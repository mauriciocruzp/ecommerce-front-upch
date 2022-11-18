import './Input.css';

function Input(props) {
  return (
    <div className='input-container'>
      <label className='label' htmlFor={props.id}>{props.text}</label>
        <input className='input' type={props.type} name={props.id} value={props.value} onChange={props.handleChange} onBlur={props.handleBlur} placeholder={props.placeholder} />
    </div>
  );
}

export default Input;