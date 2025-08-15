import App from "../App";
import BtnCancel from "../parts/BtnCancel";
import BtnSave from "../parts/BtnSave";
import { useEffect, useState } from "react";

export default function ConfigPhoneBook() {
    const [phone, setPhone] = useState([]);
    const [search, setSearch] = useState("");
    const [form, setForm] = useState({ id: null, location: "", owner: "", mail: "", number: "" });
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = () => {
        fetch("http://localhost:8080/phonebook")
            .then(res => res.json())
            .then(data => setPhone(data))
            .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        const method = form.id ? "PUT" : "POST";
        const url = form.id
            ? `http://localhost:8080/phonebook/${form.id}`
            : "http://localhost:8080/phonebook";

        fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
            .then(() => {
                fetchContacts();
                setForm({ id: null, location: "", owner: "", mail: "", number: "" });
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (p) => {
        setForm(p);
    };

    const confirmDelete = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const handleDelete = () => {
        fetch(`http://localhost:8080/phonebook/${deleteId}`, { method: "DELETE" })
            .then(() => {
                fetchContacts();
                setShowModal(false);
                setDeleteId(null);
            })
            .catch(err => console.log(err));
    };

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
        <>
            <App banner={"Configurações > Agenda"} children={
                <div className="flex flex-col gap-10">
                    <div className="w-200">
                        <form onSubmit={handleSave} className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <label htmlFor="location" className="flex flex-col">
                                    Setor
                                    <input
                                        type="text"
                                        id="location"
                                        value={form.location}
                                        onChange={handleChange}
                                        className="w-100 uppercase border border-gray-700 rounded p-2"
                                        required
                                    />
                                </label>
                                <label htmlFor="owner" className="flex flex-col">
                                    Responsável
                                    <input
                                        type="text"
                                        id="owner"
                                        value={form.owner}
                                        onChange={handleChange}
                                        className="w-100 uppercase border border-gray-700 rounded p-2"
                                        required
                                    />
                                </label>
                            </div>

                            <div className="flex gap-4">
                                <label htmlFor="mail" className="flex flex-col">
                                    E-Mail
                                    <input
                                        type="text"
                                        id="mail"
                                        value={form.mail}
                                        onChange={handleChange}
                                        className="w-100 border border-gray-700 rounded p-2"
                                        required
                                    />
                                </label>
                                <label htmlFor="number" className="flex flex-col">
                                    Número
                                    <input
                                        type="text"
                                        id="number"
                                        value={form.number}
                                        onChange={handleChange}
                                        className="w-30 border border-gray-700 rounded p-2"
                                        minLength={3}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="flex gap-4">
                                <BtnSave form={form} />
                                <BtnCancel onCancel={() => setForm({ id: null, location: "", owner: "", mail: "", number: "" })} />
                            </div>
                        </form>
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-1">
                                <span>Pesquisar</span>
                                <input
                                    type="text"
                                    id="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="rounded border border-gray-700 outline-none p-2 w-100"
                                    placeholder="Digite para pesquisar"
                                />
                            </div>
                        </form>

                        <table className="w-full my-10">
                            <thead>
                                <tr className="bg-gray-700 text-white">
                                    <th>Setor</th>
                                    <th>Responsável</th>
                                    <th>E-Mail</th>
                                    <th>Número</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPhones.length > 0 ? (
                                    filteredPhones.map(p => (
                                        <tr key={p.id} className="transition duration-300 border-b border-gray-300 hover:border-gray-700 odd:bg-white even:bg-gray-50 hover:bg-gray-200">
                                            <td className="p-2 uppercase">{p.location}</td>
                                            <td className="p-2 uppercase">{p.owner}</td>
                                            <td className="p-2">{p.mail}</td>
                                            <td className="p-2 font-bold text-center">{p.number}</td>
                                            <td className="p-2 flex gap-2 items-center justify-center">
                                                <button
                                                    onClick={() => handleEdit(p)}
                                                    className="text-white bg-green-500 w-10 rounded hover:bg-green-600"
                                                >
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button
                                                    onClick={() => confirmDelete(p.id)}
                                                    className="text-white bg-red-500 w-10 rounded hover:bg-red-600"
                                                >
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center text-gray-500 italic p-2">
                                            Nenhum resultado encontrado
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            } />

            {/* Modal de confirmação */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center" style={{backgroundColor:"#0a0a0a93"}}>
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Confirmação</h2>
                        <p>Tem certeza que deseja excluir este contato?</p>
                        <div className="mt-4 flex justify-end gap-2">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded"
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
