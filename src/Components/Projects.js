import React from 'react'
import Footer from './Footer'

const Projects = () => {
    return (
        <div className=' z-20 absolute w-[839px] h-[900px] top-[228px] bg-[#111111]  right-[38px] rounded-t-3xl'>
            <div className='flex'>
                <h1 className='  font-bold  z-10  font-serif  p-10 text-4xl text-white'>Projects</h1>
                <hr className='  w-[154px] mt-16' />

            </div>
            <div>
                <h1 className='text-white font-round text-lg ml-10 p-2 mb-1'> Tasty  Tap</h1>
                <div className='border-2 border-primary mb-3 h-44 w-auto rounded-3xl mx-8 items-center'>
                    <p className='text-white ml-5 p-2 font-seri underline'>Clone of Swiggy</p>
                    <p className='text-tertiary font-serif mx-8'> • TastyTap is a seamless and intuitive food ordering platform inspired by Swiggy.</p>
                    <p className='text-tertiary mx-8 font-serif'>•  TastyTap offers a fast and responsive user experience. Browse through a wide variety of restaurants,and
                        track your delivery in real-time. Enjoy the best of your favorite meals delivered straight to your door with
                        just a few taps</p>
                    <p className='text-tertiary mx-8 font-serif p-1'><p className='text-white inline-block underline'>Technologies</p>•  HTML, Tailwind CSS, JavaScript, React JS, and Redux,</p>

                </div>
                <h1 className='text-white font-round  text-lg ml-10 p-2 mb-1'> Indore Insights</h1>
                <div className='border-2 border-primary mb-3 h-58 w-auto rounded-3xl mx-8 items-center'>
                    <p className='text-white ml-5 p-2 font-seri underline'>
                        Explore Indore</p>
                    <p className='text-tertiary font-serif mx-8'> • Designed and developed a responsive blog website HTML and CSS. and Other The platform features
                        comprehensive articles exploring Indore's rich history, authentic cuisine, and vibrant culture.</p>
                    <p className='text-tertiary mx-8 font-serif'>•  It offers detailed guides on must-visit locations in Indore, enhancing users' understanding and appreciation
                        of the city across all devices</p>
                    <p className='text-tertiary mx-8 font-serif p-1'><p className='text-white inline-block underline'>Technologies</p>•  HTML, CSS, Javascript, Jquery, Bootstrap</p>
                    <p className='text-tertiary mx-8 font-serif p-1'> •https://vickymeshram.github.io/visit_indore_new/index.html</p>

                </div>
                <h1 className='text-white font-round  text-lg ml-10 p-2 mb-1'> Movie Scout
                </h1>
                <div className='border-2 border-primary h-44 w-auto rounded-3xl mx-8 items-center'>
                    <p className='text-white ml-5 p-2 font-round underline'>Movie Quest</p>
                    <p className='text-tertiary font-serif mx-8'> • Developed a responsive web application that allows users to search for movies and discover new films.
                        Implemented features such as search functionality, movie details, and recommendations.</p>
                    <p className='text-tertiary mx-8 font-serif'>•  Utilized APIs to fetch real-time data on movies, including reviews, and trailers, enhancing user engagement
                    </p>
                    <p className='text-tertiary mx-8 font-serif p-1'><p className='text-white inline-block underline'>Technologies</p>•  •Technologies - HTML, CSS, Javascript, Jquery, Bootstrap,
                        Api</p>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Projects