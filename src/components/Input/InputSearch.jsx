import './InputSearch.css';

function InputSearch(props) {
  return (
    <input className='input-search' type='search' name={props.id}/>
  );
}

export default InputSearch;