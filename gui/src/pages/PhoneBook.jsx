import HomeModel from "../HomeModel";
import { useEffect, useState } from "react";

export default function PhoneBook() {
    const [phone, setPhone] = useState([]);
    const [search, setSearch] = useState(""); // termo digitado

    useEffect(() => {
        fetch("http://localhost:8080/phonebook")
            .then(res => res.json())
            .then(data => setPhone(data))
            .catch(err => console.log(err));
    }, []);

    // Filtra em tempo real (case-insensitive)
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
                                onChange={(e) => setSearch(e.target.value)} // atualiza busca
                                className="rounded border border-gray-700 outline-none p-2 w-full"
                                placeholder="Digite para pesquisar"
                            />
                        </div>
                    </form>

                    <div className="flex flex-col gap-2 mt-4">
                        {filteredPhones.length > 0 ? (
                            filteredPhones.map(p => (
                                <div
                                    key={p.id}
                                    className="border border-gray-300 flex justify-between p-2 bg-gradient-to-t from-gray-200 to-gray-50 shadow rounded"
                                >
                                    <div className="flex flex-col p-2">
                                        <span className="uppercase font-bold text-2xl">{p.location}</span>
                                        <span><i className="fa fa-user"></i> {p.owner}</span>
                                        <span>
                                            <i className="fa fa-envelope"></i>{" "}
                                            <span className="text-blue-500">{p.mail}</span>
                                        </span>
                                    </div>
                                    <div className="flex items-center p-3 border-l border-gray-300">
                                        <h1 className="text-3xl font-bold">
                                            <i className="fa fa-phone"></i> {p.number}
                                        </h1>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">Nenhum resultado encontrado</p>
                        )}
                    </div>
                </>
            } />
        </div>
    );
}
