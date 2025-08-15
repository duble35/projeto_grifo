export default function HomeModel({ title, children }) {
    return (
        <div className="text-gray-800">
            <nav className="py-5 bg-white">
                <div className="container mx-auto w-[960px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-700">
                        <img src="./img/logo.png" alt="Logo do sistema" className="h-[50px]" />
                    </h1>
                    <ul className="flex gap-4">
                        <li><a href="/" className="hover:underline">Agenda</a></li>
                        <li><a href="/#" className="hover:underline">CEP/Município</a></li>
                        <li><a href="/#" className="bg-gray-700 hover:bg-gray-900 p-2 rounded text-white">Login</a></li>
                    </ul>
                </div>
            </nav>

            <main className="container mx-auto lg:w-[960px] flex flex-col gap-10 my-10 min-h-screen">
                {/* Área de pesquisa */}
                <div className="flex flex-col gap-5">
                    <div className="border-b border-gray-700">
                        <span className="bg-gray-700 px-2 py-1 font-bold rounded-t text-white">{title}</span>
                    </div>
                </div>
                {children}
            </main>
        </div>
    );
}