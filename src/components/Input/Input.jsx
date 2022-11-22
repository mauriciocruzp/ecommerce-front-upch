function Input({type, name, text, placeholder, id}) {
  return (
    <div className='flex flex-col'>
      <label className='mt-2' htmlFor={id}>{text}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} className='bg-gray-50 rounded-md px-3 py-1 placeholder-gray-400 focus:outline-none focus:outline-principal-purple' />
    </div>
  );
}

export default Input;