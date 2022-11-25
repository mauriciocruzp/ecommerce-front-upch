import React from 'react';

const Textarea = ({
  value,
  id,
  name,
  cols,
  rows = 3,
  placeholder,
  children,
  handleChange,
  handleBlur,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      cols={cols}
      rows={rows}
      className='bg-gray-50 rounded-md px-3 py-1 placeholder-gray-400 resize-none focus:outline-none focus:outline-principal-purple'
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
