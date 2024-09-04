import React from 'react'
import bgtwo from "../Images/bgtwo.jpg"
import bg from "../Images/bg.jpg"


const Body = ({ theme }) => {

    return (
        <>

            <div>
                <img className='z-0 h-[1520px] w-100% relative object-fill '
                    src={theme ? bgtwo : bg} alt="background images" />

            </div>
        </>

    )
}

export default Body