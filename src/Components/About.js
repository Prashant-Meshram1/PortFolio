import React from 'react'
import { SiCodesignal } from "react-icons/si";
import { DiWebplatform } from "react-icons/di";
import { SiTestinglibrary } from "react-icons/si";
import { FaAtom } from "react-icons/fa6";
import { RiMiniProgramFill } from "react-icons/ri";
import { SiGreatlearning } from "react-icons/si"
import Footer from './Footer';

const About = () => {
    return (
        <>
            <div className='absolute z-20  w-[839px] h-[1150px] top-[228px] bg-[#111111]  right-[38px] rounded-xl'>
                <div className='flex'>
                    <h1 className='absolute  font-bold left-[52px] z-10 top-[31px] font-serif  p-2 text-4xl text-white'>About Me</h1>
                    <hr className=' absolute bg-blue-700 top-[62px] w-[154px]  left-[310px]' />
                </div>
                <p className='absolute top-[110px] left-[45px] text-tertiary font-popins text-lg leading-7  z-20'>Motivated and hardworking Front-End Developer with a strong foundation in HTML, CSS, Bootstrap,
                    JavaScript, and React.js. Eager to learn and passionate about building responsive, user-friendly web
                    applications . Proven problem staying current with industry trends. Ready to contribute to a dynamic
                    development team and grow in a professional environment
                </p>

                <div className='text-white  text-3xl top-[255px] left-[58px] relative p-4'>What I Do!
                    <div className=' absolute top-[71px] left-[-19px] border-2 border-primary  h-[260px] w-[362px] rounded-3xl'>
                        <h5 className='text-white absolute ml-4  top-[5px] left-[38px] p-3'>Ui/Ux Design</h5>
                        <SiCodesignal className='left-[17px] absolute top-[22px] text-blue-600 ' />
                        <h3 className=' text-[17px] text-tertiary ml-3 absolute top-[60px] font-popins leading-7'> I specialize in crafting intuitive and visually engaging user interfaces. My focus is on enhancing user experience through thoughtful design, usability testing, and iterative improvement.</h3>
                    </div>
                    <div className=' absolute top-[71px] left-[380px] border-2 border-primary  h-[260px] w-[362px] rounded-3xl'>
                        <h5 className='text-white absolute ml-4  top-[6px] left-[26px] p-3'>Web development</h5>
                        <DiWebplatform className='left-[17px] absolute top-[21px] text-green-600' />
                        <h3 className=' text-[17px] text-tertiary ml-3 absolute top-[60px] font-popins leading-7'> I am a front-end developer specializing in creating responsive and user-friendly web interfaces using HTML, CSS, JavaScript and React Js. I focus on performance optimization, and seamless user experience.</h3>
                    </div>
                    <div className=' absolute top-[347px] left-[380px] border-2 border-primary  h-[260px] w-[362px] rounded-3xl'>
                        <h5 className='text-white absolute ml-4  top-[5px] left-[38px] p-3'>Version Control</h5>
                        <FaAtom className='left-[17px] absolute top-[22px] text-gray-600' />
                        <h3 className=' text-[17px] text-tertiary ml-3 absolute top-[66px] font-popins leading-7'> Experience with version control systems like Git for managing and collaborating on code..</h3>
                    </div>
                    <div className=' absolute top-[347px] left-[-19px] border-2 border-primary  h-[260px] w-[362px] rounded-3xl'>
                        <h5 className='text-white absolute ml-4  top-[5px] left-[38px] p-3'>Testing and Debugging</h5>
                        <SiTestinglibrary className='left-[20px] absolute top-[22px] text-yellow-600' />
                        <h3 className=' text-[17px] text-tertiary ml-3 absolute top-[100px] font-popins leading-7'>Skills in testing and debugging front-end code to ensure functionality and fix issues.</h3>
                    </div>
                    <div className=' absolute top-[625px] left-[-19px] border-2 border-primary  h-[260px] w-[362px] rounded-3xl'>
                        <h5 className='text-white absolute ml-4  top-[5px] left-[38px] p-3'>Cross-Browser Compatibility</h5>
                        <RiMiniProgramFill className='left-[20px] absolute top-[22px] text-orange-900' />
                        <h3 className=' text-[17px] text-tertiary ml-3 absolute top-[100px] font-popins leading-7'> Ensuring that applications work consistently across different browsers and platforms.</h3>
                    </div>
                    <div className=' absolute top-[625px] left-[380px] border-2 border-primary  h-[260px] w-[362px] rounded-3xl'>
                        <h5 className='text-white absolute ml-4  top-[5px] left-[38px] p-3'>Continuous Learning</h5>
                        <SiGreatlearning className='left-[17px] absolute top-[22px] text-green-300' />
                        <h3 className=' text-[17px] text-tertiary ml-3 absolute top-[85px] font-popins leading-7 '>Staying up-to-date with the latest web technologies, tools, and best practices to continuously improve skills and techniques..</h3>
                    </div>
                </div>
                <div className='mt-[1055px]'>
                    <Footer />
                </div>
            </div>

        </>
    )
}
export default About