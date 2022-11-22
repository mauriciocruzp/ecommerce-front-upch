import React from 'react';

const Textarea = ({ name, id, cols, rows=3, placeholder, children }) => {
  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      className='bg-gray-50 rounded-md px-3 py-1 placeholder-gray-400 resize-none focus:outline-none focus:outline-principal-purple'
      placeholder={placeholder}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
