import NavBar from "./NavBar"
import Button from "./Button"


const CoverSection = () => {
  return(
    <div>
    <div className="relative">
    <NavBar></NavBar>
    <div className="bg-primary-dark h-screen w-4/12 absolute top-0 right-0">
    <div className="bg-block-pattern bg-cover bg-center absolute h-5/6 w-full -left-10 right-0 bottom-0"></div>
    </div>
   
    </div>
    <section className="flex flex-row h-screen bg-white pl-20 justify-center items-center w-8/12">
    <div className="z-10 flex flex-col items-start">
        <h1 className="font-black text-4xl mb-5">Solutions for Every Business</h1>
        <p className="w-7/12 mb-10 text-xl">We	 have	 positioned	 ourselves	 to	 be	 the	 number	 one	 stop	 provider	 for	every software	solution	of	your	need</p>
        <Button buttonText="Contact Us" style={"text-light"}></Button>
      </div>
    </section>
    </div>
  )
}

export default CoverSection