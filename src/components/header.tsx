import Link from "next/link";
import Mobile from "./mobile";


export default function Header(){
   


    return(
        <>

      
        <div className="flex  justify-evenly items-center px-[14vw] py-4 border-b-2 border-gray-300">
            <div>
                <h1>logo</h1>
            </div>
              
              <div className="hidden md:flex ">
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