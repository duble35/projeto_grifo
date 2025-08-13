import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="w-64 min-h-screen border-r border-gray-200 bg-gray-700 text-white">
            <div className="flex flex-col h-full">
                <div className="p-4">
                    <a href="/"><h1 className="text-3xl font-bold">Grifo</h1></a>
                </div>
                <ul className="">
                    <li><a className="p-4 block hover:bg-gray-800 hover:text-white" href="/"><i className="fa fa-house"></i> Home</a></li>
                    <li>
                        <button onClick={() => setOpen(!open)} className="w-full text-left p-4 block hover:bg-gray-800 hover:text-white">
                            <i className="fa fa-gear"></i> Configurações ⊞
                        </button>
                        {open && (
                            <ul className="bg-gray-500">
                                <li>
                                    <a href="/#" className="shadow border-t border-dashed border-gray-600 p-4 block hover:bg-gray-800">Setor</a>
                                    <a href="/andar" className="shadow border-t border-dashed border-gray-600 p-4 block hover:bg-gray-800">Andar</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a className="p-4 block hover:bg-gray-800 hover:text-white" href="/sobre"><i className="fa fa-circle-info"></i> Sobre</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}