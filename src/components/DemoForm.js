import Button from './Button'

const DemoForm = () => {
  return(
    <section className='bg-primary-normal p-10 md:p-20'>
    <h2 className="text-2xl text-dark font-bold text-center">Request a Demo</h2>
    <form name="request-demo-form" method="" action="" className=''>
                    <div className="grid grid-cols-3 gap-5">
                    <div>
                        <label htmlFor="first-name" className="text-sm font-bold leading-none text-gray-800">First Name*</label>
                        <input name="first-name" aria-label="enter email adress" role="input" type="text" placeholder='Enter your first name' className="bg-gray-200 border rounded focus:outline-none text-base font-normal leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="text-sm font-bold leading-none text-gray-800">Last Name*</label>
                        <input name="last-name" aria-label="enter email adress" role="input" type="text" placeholder='Enter your last name' className="bg-gray-200 border rounded focus:outline-none text-base font-normal leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-bold leading-none text-gray-800">Phone No.*</label>
                        <input name="email" aria-label="enter email adress" role="input" type="text" placeholder='Enter your business email' className="bg-gray-200 border rounded focus:outline-none text-base font-normal leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div>
                        <label htmlFor="first-name" className="text-sm font-bold leading-none text-gray-800">Business Name</label>
                        <input name="first-name" aria-label="enter email adress" role="input" type="text" placeholder='Enter your first name' className="bg-gray-200 border rounded focus:outline-none text-base font-normal leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div>
                        <label htmlFor="first-name" className="text-sm font-bold leading-none text-gray-800">Business Email*</label>
                        <input name="first-name" aria-label="enter email adress" role="input" type="text" placeholder='Enter your first name' className="bg-gray-200 border rounded focus:outline-none text-base font-normal leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div>
                        <label htmlFor="first-name" className="text-sm font-bold leading-none text-gray-800">Job Title</label>
                        <input name="first-name" aria-label="enter email adress" role="input" type="text" placeholder='Enter your first name' className="bg-gray-200 border rounded focus:outline-none text-base font-normal leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div>
                        <label htmlFor="first-name" className="text-sm font-bold leading-none text-gray-800">Any Additional Comments</label>
                        <input name="first-name" aria-label="enter email adress" role="input" type="text" placeholder='Enter your first name' className="bg-gray-200 border rounded focus:outline-none text-base font-normal leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                      <Button buttonText={"Send"} style={"bg-white text-blue-300"}></Button>
                    </div>
      </form>
    </section>
  )
}

export default DemoForm