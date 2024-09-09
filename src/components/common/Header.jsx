import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../../assets/common/logo.png'
import { menulists } from '../../assets/data/data'
import { FaSearch,FaBars    } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion"

import { useEffect, useRef, useState } from 'react';
import ModelCart from '../cart/ModelCart';

export default function Header() {
    const styleLinkLarge = 'text-[13px] font-medium uppercase '
    const styleLink = 'text-[13px] font-medium uppercase p-[5px] hover:bg-[#aeaeae] w-full flex justify-center '
    const [isOpen,setIsOpen] = useState(false)
    const ref = useRef()


    useEffect(()=>{
        function handleShowContent (event) {
            if(!ref.current || ref.current.contains(event.target)) {
                return
            }
            setIsOpen(false)
        }
        window.addEventListener('mousedown',handleShowContent)
        window.addEventListener('touchstart',handleShowContent)

    },[])


    return (
        <>
            <header className=' px-[20px] lg:px-0 sticky top-0  z-[100] bg-white-100 text-[#555] flex justify-between'>
                <div className='left flex gap-[40px] items-center py-[15px] lg:pl-[50px]'>
                    <div className="image">
                        <img src={LogoImg} className='w-[150px]' alt="" />
                    </div>
                    <div className="lists hidden lg:flex gap-[15px] ">
                        {menulists.map((list)=>
                            (
                                <NavLink to={list.path} className={({ isActive }) => isActive ? `${styleLinkLarge} font-bold text-green-500 `: `${styleLinkLarge} `}  key={list.id}>
                                    {list.link} 
                                </NavLink>
                            )
                        )}
                    </div>
                </div>
                <div className="right lg:text-[#aaa] text-[13px] flex items-center gap-[20px] py-[15px] lg:bg-black lg:pr-[50px] lg:pl-[150px]  ">
                    <div className=' uppercase font-medium hidden lg:block'>
                        <Link to='/'>LOGIN/</Link>
                        <Link>Register</Link>
                    </div>
                    <div className="icons flex gap-[15px] text-[18px]">
                        <div className="search hidden lg:block">
                            <FaSearch className=' cursor-pointer'/>
                        </div>
                        <ModelCart />
                        <div className="menu lg:hidden">
                            {isOpen ? <FaX className=' cursor-pointer' onClick={()=> setIsOpen(!isOpen)} /> : <FaBars className=' cursor-pointer' onClick={()=> setIsOpen(!isOpen)}  />}
                        </div>
                    </div>
                </div>
            </header>
            <div
            >
            {
                isOpen 
                ?
                <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                ref={ref}
                className="lists flex flex-col bg-[#CECECE]  items-center fixed w-full z-10 lg:hidden">
                    {menulists.map((list)=>
                        (
                            <NavLink to={list.path} className={({ isActive }) => isActive ? `${styleLink} font-bold text-green-500 `: `${styleLink} `}  key={list.id}>
                                {list.link} 
                            </NavLink>
                        )
                    )}
                </motion.div>
                : null
            }
            </div>
        </>
    )
}
