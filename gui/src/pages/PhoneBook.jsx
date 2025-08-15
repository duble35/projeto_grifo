import HomeModel from "../HomeModel";
import { useEffect, useState } from "react";

export default function PhoneBook() {
    const [phone, setPhone] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/phonebook")
            .then(res => res.json())
            .then(data => setPhone(data))
            .catch(err => console.log(err));
    }, []);

    const filteredPhones = phone.filter(p => {
        const termo = search.toLowerCase();
        return (
            p.location?.toLowerCase().includes(termo) ||
            p.owner?.toLowerCase().includes(termo) ||
            p.mail?.toLowerCase().includes(termo) ||
            String(p.number).toLowerCase().includes(termo)
        );
    });

    return (
        <div>
            <HomeModel title={"Agenda"} children={
                <>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-1">
                            <span>Pesquisar</span>
                            <input
                                type="text"
                                id="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="
                                    rounded 
                                    border 
                                    border-gray-700 
                                    outline-none 
                                    p-2 
                                    w-full"
                                placeholder="Digite para pesquisar"
                            />
                        </div>
                    </form>

                    <table className="w-full mt-4">
                        <thead className="bg-gray-700 text-white">
                            <tr>
                                <th>Setor</th>
                                <th>Responsável</th>
                                <th>E-Mail</th>
                                <th>Número</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPhones.length > 0 ? (
                                filteredPhones.map(p => (
                                    <tr key={p.id} className="transition duration-300 border-b border-gray-300 hover:border-gray-700 odd:bg-gray-white even:bg-gray-50 hover:bg-gray-200">
                                        <td className="p-2"><span className="font-bold">{p.location}</span></td>
                                        <td className="p-2">{p.owner}</td>
                                        <td className="p-2"><span>{p.mail}</span></td>
                                        <td className="p-2 text-center font-bold text-xl">{p.number}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center text-gray-500 italic p-2">
                                        Nenhum resultado encontrado
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            } />
        </div>
    );
}
