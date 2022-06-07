import Button from "./Button"

const CoverSection = () => {
  return(
    <section className="flex flex-row h-screen bg-white">
    <div className="z-10">
        <h1 className="font-black text-4xl">Solutions for Every Business</h1>
        <p></p>
        <Button buttonText="Contact Us" style={"text-light"}></Button>
      </div>
    <div className="bg-primary-dark h-screen w-4/12 absolute right-0">
    </div>
    <div className="bg-block-pattern bg-cover bg-center absolute h-5/6 w-5/12 right-0 bottom-0"></div>
      
    </section>
  )
}

export default CoverSection