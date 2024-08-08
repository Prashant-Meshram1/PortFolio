import React from 'react'
import jsPDF from 'jspdf';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import vicky from "../Images/vicky.jpeg"
const Sidebar = () => {
    const Download_Resume = () => {


        var doc = new jsPDF('portrait', 'px', "a4", false)
        doc.addImage('https://i.ibb.co/CHLY8sR/PRASHANT-MESHRAM-CV-1.png', 'PNG', 0, 0, 415, 615)
        doc.save('Resume.pdf')
    }
    return (
        <>

            <div className=' bg-[#111111]  absolute h-[777px] w-[330px]  border-2 border-r-amber-500 rounded-xl  z-10 top-[225px] left-14'>
            </div>
            <img
                className="absolute z-20 rounded-[50px] top-[113px] left-[116px] bg-green-100"
                src={vicky}
                width={200}
                heigt={200}
                alt="Prashant Meshram" />
            <div className='relative'>
                <div>
                    <h1 className="absolute w-[306px] text-[36px] z-20 text-white top-[392px]  left-[69px]" >Prashant Meshram</h1>
                </div>
                <div className='relative'>
                    <h3 className='absolute bg-primary top-[461px] p-2   ml-2 rounded-xl left-[106px] inline-block text-tertiary font-popins   w-[216px] text-[20px] z-20'>Front End Developer</h3>
                </div>
                <div className='flex absolute z-20 top-[520px] left-[110px] p-3  ' >
                    <FaLinkedin className='mx-3 h-11 w-11 p-3  bg-primary blue-600 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-blue-600 rounded-lg hover:text-[#fff] ' />
                    {/* <FaLinkedin className='mx-3 h-11 w-11 p-3  bg-primary blue-600 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-blue-600 rounded-lg  hover:text-[#fff]' /> */}
                    <FaGithub className='mr-2 h-11 w-11 p-3 bg-primary hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white rounded-lg ' />
                    <FaInstagramSquare className='mr-2 h-11 w-11 p-3   bg-primary hover:bg-gradient-to-r from-[#f93838] to-[#a83066] fill-current text-blue-400 rounded-lg hover:text-[#fff]' />
                </div>
                <div className='h-[300px] w-[300px] bg-primary rounded-xl absolute z-20 top-[600px] left-[71px]'>

                </div>

                <div className='flex  h-[45px] absolute top-[919px] left-[108px] border-2 bg-[#f93838] z-20 w-[221px] items-center justify-center cursor-pointer rounded-full'>
                    <FaDownload className=' m-4 h-6 w-6 ' />
                    <button onClick={Download_Resume} className='text-white text-lg  '>Download CV</button>
                </div>
                <div className='flex absolute w-[269px] top-[606px] left-[72px] z-20  items-center  border-b-2 border-tertiary p-2'>
                    <FaPhoneSquareAlt className='h-[2.5rem] w-[2.5rem] text-[#DD2474] p-3 bg-black rounded-md mr-4 hover:bg-gradient-to-r from-[#f93838] to-[#a83066] hover:text-[#fff]' />
                    <div>
                        <p className='text-tertiary'>Phone</p>
                        <h1 className='text-white font-bold cursor-pointer hover:text-[#DD2474]'>+916265385294</h1>
                    </div>
                </div >
                <div className='flex absolute w-[269px] top-[672px] left-[72px] z-20  items-center  border-b-2 border-tertiary p-2'>
                    <FaLocationDot className='h-[2.5rem] w-[2.5rem] text-[#DD2474] p-3 bg-black rounded-md mr-4 hover:bg-gradient-to-r from-[#f93838] to-[#a83066] hover:text-[#fff]' />
                    <div>
                        <p className='text-tertiary'>Location</p>
                        <h1 className='text-white font-bold '>Indore India</h1>
                    </div>
                </div >
                <div className='flex absolute w-[269px] top-[740px] left-[72px] z-20  items-center  border-b-2 border-tertiary p-2'>
                    <MdEmail className='h-[2.5rem] w-[2.5rem] text-[#DD2474] p-3 bg-black rounded-md mr-4 hover:bg-gradient-to-r from-[#f93838] to-[#a83066] hover:text-[#fff]' />
                    <div>
                        <p className='text-tertiary'>E-mail</p>
                        <h1 className='text-white cursor-pointer font-bold hover:text-[#DD2474]'>prashantmeshram1437<br />
                            @gmail.com</h1>
                    </div>
                </div >
                <div className='flex absolute w-[269px] top-[833px] left-[72px] z-20  items-center   p-2'>
                    <FaBirthdayCake className='h-[2.5rem] w-[2.5rem] text-[#DD2474] p-3 bg-black rounded-md mr-4 hover:bg-gradient-to-r from-[#f93838] to-[#a83066] hover:text-[#fff]' />
                    <div>
                        <p className='text-tertiary'>D.O.B</p>
                        <h1 className='text-white font-bold  '>July 17, 1994</h1>
                    </div>
                </div >

            </div >

        </>
    )
}
export default Sidebar 
