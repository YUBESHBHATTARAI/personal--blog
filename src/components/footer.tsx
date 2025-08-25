import Link from "next/link";

export default function Footer(){

    return(
        <>
        <div className="flex flex-col items-center justify-center ">
            <div>
                <h1>Logo</h1>
            </div>

{/* links  */}
            <div>
                {/* site link */}
               <div>
                <Link href="/">home</Link>
                <Link href="/blogs">blogs</Link>
                <Link href="/contact">contact</Link>
               </div>

              {/* social links */}
                <h1>Social Links</h1>
               <div>
                   <Link href="/">Facebook</Link>
                   <Link href="/">Twitter</Link>
                   <Link href="/">Instagram</Link>
               </div>

            </div>
        </div>
        </>
    )
}