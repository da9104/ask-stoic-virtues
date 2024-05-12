import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();
// service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
    emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, form.current, import.meta.env.VITE_APP_PUBLIC_KEY)
  .then((result) => {
      console.log(result.text);
      alert('Sent!');
  }, (error) => {
      console.log(error.text);
      alert(JSON.stringify(error));
  });
};

return ( // 
    <div className='flex items-center justify-center p-12'>
        <form ref={form} onSubmit={sendEmail} className='mx-auto w-full max-w-[550px]'>
        <label className='mb-3 block text-base font-medium text-[#07074D]'>Name</label>
        <input type="text" name="user_name" required placeholder="Full Name" className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' />
        <label className='mb-3 block text-base font-medium text-[#07074D] mt-2'>Email</label>
        <input type="email" name="user_email" required placeholder="Email address" className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'/>
        <label className='mb-3 block text-base font-medium text-[#07074D] mt-2'>Message</label>
        <textarea name="message" required placeholder='Type your message..' className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        <input type="submit" value="Send" className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none cursor-pointer  w-full '/>
        </form>
 </div>
 );
};