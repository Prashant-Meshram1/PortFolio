import { IoIosHome } from "react-icons/io";

import { MdLibraryBooks } from "react-icons/md";

import { GoProjectSymlink } from "react-icons/go";
import { RiContactsBook3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
const Navbar = ({ theme, setTheme }) => {
    const [itemSelect, setItemsSelect] = useState("home")
    const toggle_mode = () => {
        theme == true ? setTheme(false) : setTheme(true)
    }
    const clickHandle = (items) => {
        setItemsSelect(items)
    }
    return (

        <div className={`${theme ? 'h-20 w-full bg-primary z-30 fixed' : 'h-20 w-full bg-black z-30 fixed'}`} >

            <div className="">
                < h1 className={`${theme ? 'relative top-3 left-4 text-4xl bg-gradient-to-r from-blue-500 to-cyan-300 inline-block text-transparent font-round  bg-clip-text z-30' : 'relative top-3 left-4 text-4xl  inline-block text-transparent  bg-clip-text z-30 text-white '}`} > Prashant Meshram </h1>
            </div >
            <ul>
                <div className="flex  justify-end relative top-[-47px] ">



                    <Link to="." onClick={() => clickHandle("home")}>
                        <div className={`${itemSelect === "home" ? ' h-16  m-4  w-16 bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-xl flex flex-col justify-center items-center cursor-pointer' : ' bg-cyan-700 h-16  m-4  w-16 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-xl flex flex-col justify-center items-center cursor-pointer'}`}>
                            <IoIosHome className="h-6 w-6 text-white" />
                            <p className="text-white font-round  text-[13px]  ">Home </p>
                        </div>
                    </Link>
                    <Link to="resume" onClick={() => clickHandle("resume")}>
                        <div className={`${itemSelect === "resume" ? ' h-16  m-4  w-16 bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-xl flex flex-col justify-center items-center cursor-pointer' : ' bg-cyan-700 h-16  m-4  w-16 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-xl flex flex-col justify-center items-center cursor-pointer'}`}>
                            <MdLibraryBooks className="h-6 w-6 text-white" />
                            <p className="text-white font-round  text-[13px]  ">Resume </p>
                        </div>
                    </Link>
                    <Link to="projects" onClick={() => clickHandle("projects")}>
                        <div className={`${itemSelect === "projects" ? ' h-16  m-4  w-16 bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-xl flex flex-col justify-center items-center cursor-pointer' : ' bg-cyan-700 h-16  m-4  w-16 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-xl flex flex-col justify-center items-center cursor-pointer'}`}>
                            <GoProjectSymlink className="h-6 w-6 text-white" />
                            <p className="text-white font-round  text-[13px]  ">Projects </p>
                        </div>
                    </Link>
                    <Link to="contacts" onClick={() => clickHandle("contacts")}>
                        <div className={`${itemSelect === "contacts" ? ' h-16  m-4  w-16 bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-xl flex flex-col justify-center items-center cursor-pointer' : ' bg-cyan-700 h-16  m-4  w-16 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-xl flex flex-col justify-center items-center cursor-pointer'}`}>
                            <RiContactsBook3Line className="h-6 w-6 text-white" />
                            <p className="text-white font-round  text-[13px]  ">Projects </p>
                        </div>
                    </Link>

                    <div className="relative  top-5 right-1 ">
                        <button onClick={toggle_mode} className={` bg-cyan-700 rounded-full hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  mr-10 mt-1 h-12 w-12 ${theme ? true : false}`}>
                            {theme ? <CiDark className="h-8 w-8 ml-[10px] text-white " /> : <MdDarkMode className="h-8 w-8 ml-[10px] " />}
                        </button>
                    </div>
                </div>
            </ul >
        </div >
    )
}
export default Navbar;


