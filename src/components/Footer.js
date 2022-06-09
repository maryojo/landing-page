const Footer = () => {
  return(
    <footer className="bg-primary-dark h-1/2 text-light flex flex-row p-20 justify-between">
      <div>
        <h3 className="font-bold text-xl mb-7">Contact Us</h3>
        <ul>
          <li>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>

          </li>
          <li>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
          </li>
          <li>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>

          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl mb-7">Find Us On</h3>
        <div className="flex flex-row space-x-5">
        <div className="rounded-full w-12 h-12 text-dark hover:text-light bg-white flex justify-center items-center hover:bg-primary-dark cursor-pointer">
          <svg className="h-6 w-6" viewBox="0 0 24 24"  fill="currentColor"  stroke="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </div>
          <div className="rounded-full w-12 h-12 bg-white flex justify-center items-center hover:bg-primary-dark cursor-pointer text-dark hover:text-light">
            <svg className="h-6 w-6 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
         </div>
         <div className="rounded-full w-12 h-12 text-dark hover:text-light bg-white flex justify-center items-center hover:bg-primary-dark cursor-pointer hover:border-solid hover:border-gray-50">
          <svg className="h-6 w-6"  viewBox="0 0 24 24"  fill="currentColor"  stroke="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
         </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer