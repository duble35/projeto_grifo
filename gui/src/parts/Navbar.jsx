import { useState } from "react";
import Logo from "../assets/image/logo.png";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="">
            <div className="container mx-auto flex justify-between items-center">
                <div className="py-4">
                    <a href="/home"><img src={Logo} alt="Logo do sistema" className="h-[40px]" /></a>
                </div>
                <ul className="flex gap-4">
                    <li><a className="p-2 block text-gray-700 border-b-2 border-white hover:border-gray-700 transition duration-300" href="/home"><i className="fa fa-house"></i> Home</a></li>
                    <li>
                        <button onClick={() => setOpen(!open)} className="p-2 block text-gray-700 border-b-2 border-white hover:border-gray-700 transition duration-300">
                            <i className="fa fa-gear"></i> Configurações ⊞
                        </button>
                        {open && (
                            <ul className="absolute w-[150px] bg-gray-100">
                                <li>
                                    <a href="/#" className="p-2 block hover:bg-gray-200 transition duration-300 border-b border-gray-300">Setor</a>
                                    <a href="/andar" className="p-2 block hover:bg-gray-200 transition duration-300 border-b border-gray-300">Andar</a>
                                    <a href="/agenda" className="p-2 block hover:bg-gray-200 transition duration-300 border-b border-gray-300">Agenda</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a className="p-2 block text-gray-700 border-b-2 border-white hover:border-gray-700 transition duration-300" href="/sobre"><i className="fa fa-circle-info"></i> Sobre</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}