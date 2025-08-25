
"use client"
import Link from 'next/link';
import {useState} from 'react';

export default function Mobile() {
const[isopen,setIsopen]=useState(false);
const toggleMenu =()=>{
    setIsopen(!isopen);
}


return(
    <>
      <div className='md:hidden flex flex-col justify-center items-center '>
        {isopen ? <span onClick={toggleMenu}>X</span> :  <span onClick={toggleMenu}>=</span>        }
        <div className={` flex-col  left-0 top-[5vh] justify-between items-center ${isopen?"block":"hidden"} `} >
           
        <div className='flex flex-col' onClick={toggleMenu} >
            <Link href="/">home</Link>
            <Link href="/blogs">blogs</Link>
            <Link href="/contact">contact</Link>
        </div>
            
        </div>
      </div>
    </>
)



}
