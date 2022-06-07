import ProductInfo from "./ProductInfo"
import Button from "./Button"
import accImg from "../images/accountingsoftware.png"

const ProductSection = () => {
  return(
    <section>
      <section>
        <h2 className="text-2xl text-dark font-bold">What We Offer</h2>
        <p>Our	 solutions	 are	 built	 to	 enhance	 the	 business	 operation	 of	 our clients	by	developing	and/or	implementing premium	IT	products	and	services. You could request a demo for any of our products.</p>
        <Button buttonText={"Request Demo"} style={"text-light"}></Button>
      </section>
      <div>
        <ProductInfo heading={"Accounting Software"} imgSrc={accImg}>
        Our Accounting	software	is	specially built	 to	help	 businesses track	 financial	 statements,	 cash	 flow,	 invoicing and	purchase	 orders.	 
        In	 addition,	 our solution	 comes with	 specialized	functionalities	 for	 effective	 peer	 supervision and	 debt	 management.
        Our	AI-powered	chatbot	also	stands	this	app	out	as we	have	invested	a	lot	of	resources	in	making	Accounting	fun
        </ProductInfo>
      </div>
    </section>
  )
}

export default ProductSection