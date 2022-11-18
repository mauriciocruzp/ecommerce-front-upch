const Button = ({width, onClickHandler, children}) => {
  return <button onClick={onClickHandler} className={`${width} bg-principal-purple text-white font-light text-sm rounded-md px-4 py-2 hover:bg-hover-purple`}>
    {children}
  </button>;
};

export default Button;
