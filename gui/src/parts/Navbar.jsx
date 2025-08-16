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
                <ul className="flex gap-4 bg-gray-700 rounded-lg border border-gray-700">
                    <li><a className="rounded-l-lg p-2 block text-white transition duration-300 hover:bg-gray-600" href="/home"><i className="fa fa-house"></i> Home</a></li>
                    <li>
                        <button onClick={() => setOpen(!open)} className="p-2 block text-white transition duration-300 hover:bg-gray-600">
                            <i className="fa fa-gear"></i> Configurações ⊞
                        </button>
                        {open && (
                            <ul className="absolute mt-4 w-[150px] rounded-lg bg-gray-100 shadow overflow-hidden">
                                <li>
                                    <a href="/#" className="p-2 block hover:text-white hover:bg-gray-700 transition duration-300">Setor</a>
                                </li>
                                <li>
                                    <a href="/andar" className="p-2 block hover:text-white hover:bg-gray-700 transition duration-300">Andar</a>
                                </li>
                                <li>
                                    <a href="/agenda" className="p-2 block hover:text-white hover:bg-gray-700 transition duration-300">Agenda</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a className="rounded-r-lg p-2 block text-white transition duration-300 hover:bg-gray-600" href="/sobre"><i className="fa fa-circle-info"></i> Sobre</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}