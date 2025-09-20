import Link from "next/link";
import Mobile from "./mobile";


export default function Header(){
   


    return(
        <>

      
        <div className="flex justify-evenly  items-center w-full  py-4 border-b-2 border-gray-300">
            <div className="flex  mx-5   ">
                <Link href="/">Logo</Link>
            </div>
              
              <div className="hidden md:flex  justify-end items-center  gap-[4rem]">
                <Link href="/">home</Link>
                <Link href="/blogs">blogs</Link>
                <Link href="/contact">contact</Link>
              </div>
              <div>
              <Mobile />
              </div>

        </div>
        </>
    )
}