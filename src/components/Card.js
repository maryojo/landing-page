
const Card = ({imgSrc, title, children}) =>{
  return(
    <div className="flex flex-col justify-center">
      <div className="flex justify-center align-middle mb-7">
        <img src={imgSrc} alt="" className="w-20"/>
      </div>
      <h3 className="font-bold text-lg text-center mb-4">{title}</h3>
      <p className="text-base leading-loose text-center">{children}</p>
    </div>
  )
}

export default Card