const Button = ({width, onClickHandler, children, type}) => {
  return <button onClick={onClickHandler} type={type} className={`${width} bg-principal-purple text-white font-light text-sm rounded-md px-4 py-2 hover:bg-hover-purple`}>
    {children}
  </button>;
};

export default Button;
