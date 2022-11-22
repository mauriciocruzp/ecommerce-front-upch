function Input({type, name, placeholder, id}) {
  return (
    <div className='input-container'>
      <input type={type} name={name} id={id} placeholder={placeholder} className='bg-gray-50 rounded-md px-3 py-1 placeholder-gray-400 focus:outline-none focus:outline-principal-purple' />
    </div>
  );
}

export default Input;