import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from './Footer';
const Contacts = () => {
    return (
        <div className=' z-20 absolute w-[839px] h-[900px] top-[228px] bg-[#111111]  right-[38px] rounded-3xl'>
            <div className='flex'>
                <h1 className='  font-bold  z-10  font-serif  p-10 text-4xl text-white'>Contacts</h1>
                <hr className='  w-[154px] mt-16' />
            </div>
            <div className='flex justify-evenly'>
                <div className='h-32 w-80   bg-primary rounded-xl'>
                    <div className='flex  items-center'>
                        <FaPhoneAlt className='h-6 w-6 m-3 bg-cyan-300 p-1 rounded-lg' />
                        <p className='text-white font-bold font-serif'>Phone</p>
                    </div>
                    <p className='text-tertiary ml-10 font-bold cursor-pointer py-2 '>+91 6265385294</p>
                    <p className='text-tertiary  ml-10  font-bold cursor-pointer'>+91 7987206996</p>
                </div>
                <div className='h-32 w-80   bg-primary rounded-xl'>
                    <div className='flex  items-center'>
                        <MdEmail className='h-6 w-6 m-3 bg-cyan-300 p-1 rounded-lg' />
                        <p className='text-white font-bold font-serif'>Email</p>
                    </div>
                    <p className='text-tertiary ml-10 font-bold cursor-pointer py-2 '>prashantmeshram1437@gmail.com</p>
                    <p className='text-tertiary ml-10 font-bold cursor-pointer py-2 '>prashantmeshram11437@gmail.com</p>
                </div>
            </div>
            <div className='h-[500px] w-[710px] border-2 border-primary ml-16 mt-10 rounded-xl ' >
                <p className='text-tertiary font-bold text-2xl mt-10 ml-28 mb-4'>I am always open to discussing product </p>
                <p className='text-white font-bold text-2xl ml-28 mb-4 '>design work or partnerships </p>
                <form>
                    <div>
                        <label className=" text-white p-2 ml-28" for="name">Name:</label><br />
                        <input className='bg-primary ml-28 border-b-2 text-white font-bold  font-serif border-yellow-300 w-2/3 rounded-xl ' type="text" name="name"></input><br /><br />

                    </div>

                    <div>
                        <label className=" text-white ml-28 " for="email">Email:</label><br />
                        <input className='bg-primary text-white border-b-2 border-yellow-300 ml-28 w-2/3 rounded-lg' type="email" name="email"></input><br /><br /></div>

                    <div>
                        <label className=" text-white ml-28 " for="message">Message:</label><br />
                        <textarea className='bg-primary  text-white border-b-2 ml-28 border-yellow-300 w-2/3 rounded-xl' name="message"></textarea>
                    </div>

                    <div>
                        <button className='text-white bg-slate-600 px-8 p-2 mt-7 ml-28 rounded-xl'>Send</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contacts