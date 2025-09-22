import Typewriter from "@/components/Typewritter";


export default function Profile(){


    return(
        <>
        <div className="text-gray text-xl  mt-2 px-1 text-justify flex flex-col justify-center items-center  ">
         <h1 className="text-center text-2xl uppercase text-gray-300  font-semibold">Hi</h1> 
         <Typewriter text="this is my fuckung blog  site " speed={100} />
        <p className="">Hope you enjoy my blogs </p>

        </div>
        </>
    )
}