import './Button.css';

function Button(props) {
  return (
    <button
      style={{ width: props.width }}
      className={'button ' + props.classNameButton}
      type={props.type}
    >
      {props.text}
    </button>
  );
}

export default Button;
