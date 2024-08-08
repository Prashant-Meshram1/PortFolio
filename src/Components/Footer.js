import React from 'react'
import { PiCopyrightBold } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='w-full h-36  bg-gradient-to-r from-[#330019] to-[#001933] rounded-b-xl mt-6  absolute z-30'>
            <div>
                <div className='flex items-center justify-center mt-7 p-3'>
                    <PiCopyrightBold className='text-white mx-2' />
                    <h1 className='text-white'>2024 All Rights Reserved by P-coder themes.</h1>
                </div>

                <div className='flex items-center justify-center '>
                    <input className='border-2 border-tertiary bg-transparent text-white px-2 w-[400px]  mx-4 rounded-lg' placeholder="Please! feel free to ask anything.....">
                    </input>
                    <button className='text-white border-2 border-tertiary bg-primary px-4 rounded-lg'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Footer