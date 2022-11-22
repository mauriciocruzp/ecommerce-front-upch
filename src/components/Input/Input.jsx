function Input({type, name, text, placeholder, id}) {
  return (
    <div className='flex flex-col'>
      <label className='mt-3' htmlFor={id}>{text}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} className='bg-purple-white rounded-md px-3 py-1 placeholder-intermidiate focus:outline-none focus:outline-principal-purple but' />
    </div>
  );
}

export default Input;