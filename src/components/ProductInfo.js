const ProductInfo = ({heading, imgSrc, imgAlt, style, children}) => {
  return(
    <section className={" flex space-y-14 flex-col-reverse text-center md:text-left " + style}>
      <img src={imgSrc} alt={imgAlt} className="w-3/6"/>
      <div>
        <h3 className="font-bold text-xl mb-5">{heading}</h3>
        <p className="text-base leading-loose">{children}</p>
      </div>
    </section>
  )
}

export default ProductInfo