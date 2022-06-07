const ProductInfo = ({heading, imgSrc, style, children}) => {
  return(
    <section className={"bg-green-300 p-20 " + style}>
      <img src={imgSrc}/>
      <div>
        <h3 className="font-bold text-xl text-dark">{heading}</h3>
        <p className="text-dark">{children}</p>
      </div>
    </section>
  )
}

export default ProductInfo