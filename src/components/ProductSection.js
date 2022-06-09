import ProductInfo from "./ProductInfo"
import Button from "./Button"
import accImg from "../images/accountingsoftware.png"

const ProductSection = () => {
  return(
    <section className="px-44 py-20">
      <section className="px-32 text-center mb-20">
        <h2 className="text-2xl font-bold mb-10">What We Offer</h2>
        <p className="mb-10">Our	 solutions	 are	 built	 to	 enhance	 the	 business	 operation	 of	 our clients	by	developing	and/or	implementing premium	IT	products	and	services. You could request a demo for any of our products.</p>
        <Button buttonText={"Request Demo"} style={"text-light"}></Button>
      </section>
      <div className="space-y-28">
        <ProductInfo heading={"Accounting Software"} imgSrc={accImg} imgAlt={"Accounting Software Screens"} style={" flex-row-reverse"}>
        Our Accounting	software	is	specially built	 to	help	 businesses track	 financial	 statements,	 cash	 flow,	 invoicing and	purchase	 orders.	 
        In	 addition,	 our solution	 comes with	 specialized	functionalities	 for	 effective	 peer	 supervision and	 debt	 management.
        Our	AI-powered	chatbot	also	stands	this	app	out	as we	have	invested	a	lot	of	resources	in	making	Accounting	fun
        </ProductInfo>
        <ProductInfo heading={"HR Software"} imgSrc={accImg} imgAlt={"Accounting Software Screens"} style={"flex-row "}>
        Recruiting	is energy	zapping	and time-consuming. From	creating	job	descriptions	 to	 automating	 candidate	 screening,	 to	 even	 interview	scheduling,	our	HR	Software	stands	out	as	very	effective.	Experience Modern	 International	 Payroll	With	 Powerful	 Integrations	 &	 Unified	Processes with	EntréeLab HR
        </ProductInfo>
        <ProductInfo heading={"School Management Software"} imgSrc={accImg} imgAlt={"Accounting Software Screens"} style={"flex-row-reverse "}>
        The	 EntréeLab	 School	 Management	 Software	 is	 an	 e-learning	application	built	as	a	central	learning	hub	where	multiple	users	have	access	 to	 training	and	evaluation	 tools	 needed	in	 one place.	 It	is	an	effective	 LMS	 application	 developed	 with	 special	 consideration	 for	the	Nigerian	market.	
        The	 software	 is	 designed	 to	 help	 educators/schools,	 parents	 and	 most	
        especially	 student	 monitor	 and	 evaluate	 development	 and	
        performance	in	their	activities	by	providing	periodic	digital	charts	in	
        designated	accounts.	
        </ProductInfo>
      </div>
    </section>
  )
}

export default ProductSection