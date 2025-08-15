import HomeModel from "../HomeModel";

export default function PhoneBook() {
    return (
        <div>
            <HomeModel title={"Agenda"} children={
                <>
                    <form>
                        <div className="flex flex-col gap-1">
                            <span>Pesquisar</span>
                            <input
                                type="text"
                                id="search"
                                tabIndex={1}
                                className="rounded border border-gray-700 outline-none p-2 w-full"
                                placeholder="Digite para pesquisar"
                            />
                        </div>
                    </form>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between p-2 bg-gray-100 shadow rounded">
                            <div className="flex flex-col p-2">
                                <span className="uppercase font-bold text-2xl">tecnologia da informação - TI</span>
                                <span className=""><i className="fa fa-user"></i> Carlos Sousa | Paulo Souza</span>
                                <span className=""><i className="fa fa-envelope"></i> <span className="text-blue-500">ti3.indsh@hrpc.org.br | ti2.indsh@hrpc.org.br</span></span>
                            </div>
                            <div className="flex items-center p-2 border-l border-gray-300">
                                <h1 className="text-3xl font-bold"><i className="fa fa-phone"></i> 100</h1>
                            </div>
                        </div>
                        <div className="flex justify-between p-2 bg-gray-100 shadow rounded">
                            <div className="flex flex-col p-2">
                                <span className="uppercase font-bold text-2xl">cme</span>
                                <span className=""><i className="fa fa-user"></i> Responsabilidade do setor</span>
                                <span className=""><i className="fa fa-envelope"></i> <span className="text-blue-500">E-Mail não associado</span></span>
                            </div>
                            <div className="flex items-center p-2 border-l border-gray-300">
                                <h1 className="text-3xl font-bold"><i className="fa fa-phone"></i> 105</h1>
                            </div>
                        </div>
                    </div>
                </>
            } />
        </div>
    );
}
