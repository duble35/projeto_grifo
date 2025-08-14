import App from "../App.js";
import BtnSave from "../parts/BtnSave.jsx";
import Fieldset from "../parts/Fieldset.jsx";
import { useEffect, useState } from "react";

export default function Floor() {

    const [floor, setFloor] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/floor")
            .then(res => res.json())
            .then(data => setFloor(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <App
                children={
                    <div className="grid grid-cols-3 gap-4">
                        <div className="">
                            <Fieldset
                                legend={"Dados do Andar"}
                                children={
                                    <form className="flex flex-col gap-2">
                                        <div className="flex flex-col gap-1">
                                            <label forname="id">ID</label>
                                            <input type="text" name="id" id="id" className="w-30 border outline-gray-900 border-1 p-2 border-gray-700 rounded" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label forname="id">Nome</label>
                                            <input type="text" name="id" id="id" className="w-64 border p-2 outline-gray-900 border-1 border-gray-700 rounded" />
                                        </div>
                                        <div className="my-4">
                                            <BtnSave />
                                        </div>
                                    </form>
                                }
                            />
                        </div>
                        <div className="col-span-2">
                            <Fieldset
                                legend={"Andares Cadastrados"}
                                children={
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className=" bg-gray-700 text-white rounded-tl">ID</th>
                                                <th className=" bg-gray-700 text-white">Andares</th>
                                                <th className=" bg-gray-700 text-white rounded-tr">Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {floor.map(floor => (
                                                <tr key={floor.id}>
                                                    <td className="w-30 border-gray-500 border p-2 text-center">{floor.id}</td>
                                                    <td className="border-gray-500 border p-2 ">{floor.floor}</td>
                                                    <td className="w-30 border-gray-500 border p-2 text-center">
                                                        <button className="mx-1 text-white bg-green-600 hover:bg-green-700 py-1 px-2 rounded"><i className="fa fa-edit"></i></button>
                                                        <button className="mx-1 text-white bg-red-600 hover:bg-red-700 py-1 px-2 rounded"><i className="fa fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                }
                            />
                        </div>
                    </div>
                }
                banner={"Configurações > Andar"}
            />
        </>
    );
}