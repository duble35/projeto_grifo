import App from "../App";
import BtnSave from "../parts/BtnSave.jsx";

export default function Config() {
    return (
        <>
            <App
                children={
                    <div className="flex">
                        <div className="w-64 bg-gray-100 min-h-screen">
                            <ul className="py-4">
                                <li><a href="/#" className="tex-gray-900 hover:text-white font-bold p-2 lg:hover:bg-blue-700 float-left w-64 ">Configurações Andar</a></li>
                                <li><a href="/#" className="tex-gray-900 hover:text-white font-bold p-2 lg:hover:bg-blue-700 float-left w-64 ">Link</a></li>
                                <li><a href="/#" className="tex-gray-900 hover:text-white font-bold p-2 lg:hover:bg-blue-700 float-left w-64 ">Link</a></li>
                                <li><a href="/#" className="tex-gray-900 hover:text-white font-bold p-2 lg:hover:bg-blue-700 float-left w-64 ">Link</a></li>
                                <li><a href="/#" className="tex-gray-900 hover:text-white font-bold p-2 lg:hover:bg-blue-700 float-left w-64 ">Link</a></li>
                            </ul>
                        </div>
                        <div className="flex-1 px-10">

                            <form>
                                <h2 className="text-2xl font-bold">Configurações - Andar</h2>
                                <div className="flex gap-4 my-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="id">ID</label>
                                        <input type="text" id="id" className="border border-gray-900 rounded outline-none p-2 w-20" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="floor">Andar</label>
                                        <input type="text" className="border border-gray-900 rounded outline-none p-2 w-45" />
                                    </div>
                                </div>
                                <BtnSave />
                            </form>

                        </div>
                    </div>
                } />
        </>
    );
}