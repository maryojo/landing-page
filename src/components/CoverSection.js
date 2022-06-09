import NavBar from "./NavBar"
import Button from "./Button"


const CoverSection = () => {
  return(
    <section className="flex flex-row h-screen bg-white pl-20">
    <NavBar></NavBar>
    <div className="z-10 flex flex-row items-center">
        <h1 className="font-black text-4xl mb-5">Solutions for Every Business</h1>
        <p className="w-7/12">We	 have	 positioned	 ourselves	 to	 be	 the	 number	 one	 stop	 provider	 for	every software	solution	of	your	need</p>
        <Button buttonText="Contact Us" style={"text-light"}></Button>
      </div>
    <div className="bg-primary-dark h-screen w-4/12 absolute right-0">
    </div>
    <div className="bg-block-pattern bg-cover bg-center absolute h-5/6 w-5/12 right-0 bottom-0"></div>
      
    </section>
  )
}

export default CoverSection