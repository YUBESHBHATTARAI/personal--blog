"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Mobile() {
  const [isopen, setIsopen] = useState(false);
  const toggleMenu = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <div className="md:hidden w-full px-6 py-1 flex justify-between items-center relative shadow">
        {isopen ? (
          <span
            onClick={toggleMenu}
            className="cursor-pointer text-2xl font-bold"
          >
            ✕
          </span>
        ) : (
          <span
            onClick={toggleMenu}
            className="cursor-pointer text-2xl font-bold"
          >
            ☰
          </span>
        )}

        
        <AnimatePresence>
          {isopen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[10vh] left-0 w-full  shadow-lg p-4 rounded-b-2xl flex flex-col items-center  gap-[2rem]  "
            >
              <Link href="/" onClick={toggleMenu} className="hover:text-blue-500 py-2">
                Home
              </Link>
              <Link href="/blogs" onClick={toggleMenu} className="hover:text-blue-500 py-2">
                Blogs
              </Link>
              <Link href="/contact" onClick={toggleMenu} className="hover:text-blue-500 py-2">
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
