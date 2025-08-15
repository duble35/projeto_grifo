export default function HomePage() {
    return (
        <div className="text-gray-800">
            <nav className="py-5">
                <div className="container mx-auto lg:w-[960px] flex justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-700">Grifo</h1>
                    </div>
                    <ul>
                        <li><a href="/#">Login</a></li>
                    </ul>
                </div>
            </nav>
            <main className="container mx-auto lg:w-[960px] flex flex-col gap-10 my-10">
                <div className="flex flex-col gap-5">
                    <div className="border-b border-gray-700">
                        <span className="bg-gray-700 px-2 py-1 font-bold rounded-t text-white">Agenda</span>
                    </div>
                    <form action="">
                        <div className="flex flex-col gap-1">
                            <span>Pesquisar</span>
                            <input type="text" id="search" tabIndex={1} className="rounded border border-gray-700 outline-none p-2 w-full" placeholder="Digite para pesquisar" />
                        </div>
                    </form>
                </div>
                <div className="">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-700 text-white">
                                <th>Dados do setor</th>
                                <th>Número</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-700">
                                <td className="flex flex-col gap-1 py-3">
                                    <p className="uppercase font-bold">tecnologia da informação - t.i.</p>
                                    <p>
                                        Carlos Sousa | Paulo Souza 
                                    </p>
                                    <p className="text-blue-500">
                                        ti3.indsh@hrpc.org.br | ti2.indsh@hrpc.org.br
                                    </p>
                                </td>
                                <td className="text-center">
                                    <h1 className="text-4xl rounded font-bold bg-gray-700 py-5 text-white">100</h1>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="flex flex-col gap-1 py-3">
                                    <p className="uppercase font-bold">cme</p>
                                    <p>
                                        *** Responsabilidade do setor *** 
                                    </p>
                                    <p className="text-blue-500">
                                        *** Sem E-Mail associado ***
                                    </p>
                                </td>
                                <td className="text-center">
                                    <h1 className="text-4xl rounded font-bold bg-gray-700 py-5 text-white">102</h1>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}