import pic from '../images/aboutpic.jpg'

const AboutSection = () => {
  return(
    <div>
      <div className="bg-about-image bg-cover bg-center bg-no-repeat h-screen w-5/12 absolute left-0 invisible md:visible"></div>
    <section className="bg-primary-dark md:h-screen px-14 py-20 md:p-20">
      <section className="flex flex-col md:w-6/12 md:absolute md:right-0 md:pr-20 space-y-10">
        <h2 className="text-2xl text-gray-100 font-bold text-center md:text-left">About Entreelab</h2>
        <p className="text-gray-100 text-base leading-loose text-center md:text-left">We are	a	software	development	company in	Nigeria that	works	 with	 Enterprise	 systems,	 Schools and	 Companies.	 As	 a	 privately	owned	 company,	 EntréeLab provides	 IT	 Consultancy,	 software	 design	 and	 development offering	fully-fledged services	 for	 software	development	 and	 engineering, empowering	 effective	 near-shore	management	to	its	clients.</p>
      </section>
    </section>
    </div>
  )
}

export default AboutSection