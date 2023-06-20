import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section>
        <nav className="flex justify-center items-center capitalize">
            <ul className='max-w-screen-xl flex gap-8 items-center justify-center font-[400] text-[12px]'>
            <li>
                <Link href="#" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:underline underline-offset-8 decoration-3 ">Jewelry & Accessories</Link>
                </li>
                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:underline underline-offset-8 decoration-3">Clothing & Shoes</Link>
                </li>
                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:underline underline-offset-8 decoration-3">Home & Living</Link>
                </li>
                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:underline underline-offset-8 decoration-3">Wedding & Party</Link>
                </li>

                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:underline underline-offset-8 decoration-3">Toyes & Entertainment</Link>
                </li>
                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:underline underline-offset-8 decoration-3">Art & Collectibles</Link>
                </li>
                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:underline underline-offset-8 decoration-3">Craft Supplies & Tools</Link>
                </li>
                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:underline underline-offset-8 decoration-3">Vintage</Link>
                </li>
            </ul>
        
        </nav>

    </section>
  )
}

export default Navbar