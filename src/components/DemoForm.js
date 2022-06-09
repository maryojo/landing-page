import Button from './Button'

const DemoForm = () => {
  return(
    <section className='bg-primary-normal p-20'>
    <h2 className="text-2xl text-dark font-bold">Request a Demo</h2>
    <form name="request-demo-form" method="" action="" className='text-lg '>
                    <div className="flex flex-col">
                        <label htmlFor="first-name" className='mb-1'>First Name</label>
                        <input type="text" name="first-name" id="first-name" placeholder="Enter your first name" className="rounded-md w-80 bg-gray-200 px-3 py-2 focus:border-blue-500 "
                        // onChange={handleChange} 
                        />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        {/* <input type="email" name="email" id="email" onChange={handleChange}/> */}
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        {/* <textarea name="message" id="message" rows="6" onChange={handleChange}></textarea> */}
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
      </form>
    </section>
  )
}

export default DemoForm