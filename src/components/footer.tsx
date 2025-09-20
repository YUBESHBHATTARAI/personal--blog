import Link from "next/link";

export default function Footer(){

    return(
        <>
        <div className="flex flex-col items-between justify-center  ">
            <hr />
            <div className="">
               <Link href="/">Logo</Link>
            </div>

              {/* links  */}
            <div className="flex-col group-flex-col justify-end ">
                {/* site link */}
               <div className="flex flex-col group">
                <Link href="/">home</Link>
                <Link href="/blogs">blogs</Link>
                <Link href="/contact">contact</Link>
               </div>

              {/* social links */}
               <div className="flex flex-col group  ">
                <h1>Social Links</h1>
                   <Link href="/">Facebook</Link>
                   <Link href="/">Twitter</Link>
                   <Link href="/">Instagram</Link>
               </div>

            </div>
        </div>
        </>
    )
}