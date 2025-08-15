import Footer from "./parts/Footer";
import Logo from "./assets/image/logo.png";

export default function HomeModel({ title, children }) {
    return (
        <div className="text-gray-800">
            <nav className="py-5 bg-white">
                <div className="px-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-700">
                        <img src={Logo} alt="Logo do sistema" className="h-[40px]" />
                    </h1>
                    <ul className="flex gap-4">
                        <li><a href="/" className="hover:underline">Agenda</a></li>
                        <li><a href="/#" className="hover:underline">CEP/Município</a></li>
                        <li><a href="/#" className="hover:bg-gray-100 border border-gray-500 p-1 rounded-full flex gap-1"><i className="fa fa-user border w-6 h-6 text-center p-1 rounded-full bg-gray-700 text-white"></i><span className="font-bold px-1">Login</span></a></li>
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
            <Footer/>
        </div>
    );
}