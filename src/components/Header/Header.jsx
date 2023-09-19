import { useState } from "react";
import Logo from "/vite.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  // const navLinks = ["Home", "About", "Services", "Contact"];
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ]
  return (
    <header className="max-w-screen-xl mx-auto py-5 px-2">
      <nav className="flex justify-between items-center border-b-2 pb-5">
        <figure className="flex justify-center items-center gap-2">
          <img src={Logo} alt="Logo" />
          <h1 className="text-4xl font-bold uppercase"><span className="text-primary">Lo</span><span>go</span></h1>
        </figure>
        <ul className={`md:flex duration-1000 md:flex-row justify-around items-center gap-5 absolute md:static ${isOpen ? "flex-col top-24 right-5 bg-base-200 md:bg-transparent rounded-md px-10 py-5 shadow-lg md:shadow-none z-50" : "hidden md:flex -top-60 right-5"} `}>
          {navLinks.map((navLink, idx) => <li className="text-xl font-semibold hover:text-primary duration-500 btn-ghost px-3 py-2 rounded-md" key={idx}><a href={navLink.path}>{navLink.name}</a></li>)}
        </ul>
        <div className="flex justify-center items-center gap-2">
          <button className="btn btn-primary">Login</button>
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost text-xl md:hidden">{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
        </div>
      </nav>
    </header>
  )
}
