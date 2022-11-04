import './Button.css';

function Button(props) {
  return (
    <button 
    style={{width: props.width}}
    className={"button " + props.classNameButton}
    onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;