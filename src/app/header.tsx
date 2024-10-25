import Link from "next/link"

function Header(){
    return(
        <header className="flex w-screen bg-white">
            <div>
                <h2 className="text-2xl md:text-3xl mt-5 md:mt-10 mx-5 md:mx-10 font-semibold text-black-900"> GREEMIND</h2>
            </div>
            
            <div>
                <nav className="flex">
                    <ul className="flex gap-x-3 md:gap-x-10 mt-5 md:mt-10 mx-10 text-gray-800 font-semibold ">
                        <li>
                        <Link href="/" className="hover:text-white hover:bg-teal-800 px-2 pt-1 pb-1 rounded-sm text-sm md:text-base">HOME</Link>
                        </li>

                        <li>
                        <Link href="/products" className="hover:text-white hover:bg-teal-800 px-2 pt-1 pb-1 rounded-sm text-sm md:text-base">PRODUCTS</Link>
                        </li>

                        <li>
                        <Link href="/contact" className="hover:text-white hover:bg-teal-800 px-2 pt-1 pb-1 rounded-sm text-sm md:text-base">CONTACT</Link>
                        </li>
                    </ul>

            
                </nav>
            </div>

        </header>
    )
}
export default Header;