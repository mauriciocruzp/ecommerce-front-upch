function Input({
  type,
  placeholder,
  id,
  name,
  value,
  handleChange,
  handleBlur,
}) {
  return (
    <input
      value={value}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      className='bg-gray-50 w-full rounded-md px-3 py-1 placeholder-gray-400 focus:outline-none focus:outline-principal-purple'
    />
  );
}

export default Input;
