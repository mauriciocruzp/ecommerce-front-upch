import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <div className="img-container">
        <img src={props.src} alt={props.text} className='img-card' />
      </div>
      <div className="name">
        <p><b>{props.text}</b></p>
      </div>
      <div className="info">
        <div className="price">
          <div className="p">Price:</div>
          <div className="number">{"$" + props.price}</div>
        </div>
        <button className="add-btn" onClick={props.onClick}>{<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
        </svg>}</button>
      </div>
    </div>
  );
}

export default Card;