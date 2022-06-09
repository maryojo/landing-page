import Card from "./Card"
import reliableImg from '../images/reliable.png'
import easyImg from '../images/easytouse.png'
import supportImg from '../images/support.png'

const Why = () => {
  return(
    <section className="p-20 px-36">
      <h2 className="text-2xl text-dark font-bold text-center">Why Choose Our Products?</h2>
      <div className="flex flex-col md:flex-row space-x-20 my-20">
        <Card title={"Reliable"} imgSrc={reliableImg}>
        Our products are reliable and will work as intended with no unexpected problems. You can also trust that the we will keep your software up to date and fix any bugs that are found.
        </Card>
        <Card title={"Easy to Use"} imgSrc={easyImg}>
        Softwares do not have to be complicated. With our easy to use software, you can get started quickly and get the results you need. We make it easy for you to get started and to get the results you need.
        </Card>
        <Card title={"Great Support"} imgSrc={supportImg}>
        We provide great support to our clients. We are always available to answer any questions or concerns you may have, and we will do whatever it takes to make sure you are satisfied with our services. 
        </Card>
      </div>
    </section>
  )
}

export default Why