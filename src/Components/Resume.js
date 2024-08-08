import React from 'react'
import Footer from './Footer';

const Resume = () => {
    return (
        <>
            <div className=' z-20 absolute w-[839px] h-[900px] top-[228px] bg-[#111111]  right-[38px] rounded-3xl'>
                <div className='flex'>
                    <h1 className='  font-bold  z-10  font-serif  p-10 text-4xl text-white'>Resume</h1>
                    <hr className='  w-[154px] mt-16' />
                </div>
                <div className=' '>
                    <div className='text-white text-2xl font-serif ml-8 p-2'>EDUCATION </div>
                </div>
                <div className=''>
                    <div className='h-52 mx-8 w-76 border-2 border-primary rounded-3xl ' >
                        <div className='text-white text-xl font-serif p-2 ml-5'>Graduation
                            <p className='text-tertiary text-sm'>Bachelor of Engineering(IT)</p>
                            <p className='text-tertiary text-sm'>Shri Govindram Seksaria Institute of Technology and Science Indore</p>
                            <p className='text-tertiary text-sm'>2013-2017</p>
                        </div>
                        <div className="text-white text-xl p-2 ml-5">Higher Secondary

                            <p className='text-tertiary text-sm'>Govt Higher sec. school Miragpur, Balaghat</p>
                            <p className='text-tertiary text-sm'>2011-2012</p>
                        </div>

                    </div>
                    <div className='text-white text-2xl ml-8 mt-5 font-serif p-2'>EXPERIENCE</div>
                    <div className='h-28   w-76 border-2 border-primary mx-8 rounded-3xl ' >
                        <div className='text-white text-xl p-2 font-serif ml-5'>Internship
                            <p className='text-tertiary text-sm'>React JS Developer Intern</p>
                            <p className='text-tertiary text-sm'>Infograins Software Solutions Pvt. Ltd
                            </p>
                            <p className='text-tertiary text-sm'>May 2024-Present</p>
                        </div>
                    </div>
                    <div className='text-white text-2xl ml-8 mt-4 font-serif p-2 '>SKILLS</div>
                    <div className='h-32  flex flex-wrap items-center w-76 border-2 border-primary mx-8 rounded-3xl ' >
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>React Js</h1>
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>Javascript </h1>
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>Redux</h1>
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>CSS3</h1>
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>HTML5</h1>
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>Tailwind css</h1>
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>Bootstrap</h1>
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>Git</h1>
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>Github</h1>
                        <h1 className='bg-primary px-4  m-3 py-1 rounded-xl text-white inline-block animate-bounce hover:animate-none'>API Integration</h1>

                    </div>
                </div>
                <Footer />
            </div >
        </>

    )
}

export default Resume;