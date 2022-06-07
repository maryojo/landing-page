const Button = ({buttonText, style}) => {
  return(
    <button className={"bg-primary-normal rounded-md pt-2 pb-2 pl-7 pr-7 "+style}>
      {buttonText}
    </button>
  )
}

export default Button