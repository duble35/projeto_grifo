import Logo from "../assets/image/logo.png";
export default function Navbar2(){
    return(
        <nav className="py-5">
                <div className="mx-auto lg:w-[1140px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <a href="/">
                        <h1 className="text-3xl font-bold text-gray-700">
                            <img src={Logo} alt="Logo do sistema" className="h-[50px]" />
                        </h1>
                    </a>
                    <ul className="flex gap-4">
                        <li><a href="/" className="font-bold p-1 rounded hover:text-white hover:bg-gray-700 transition duration-300">Agenda</a></li>
                        <li><a href="/cep" className="font-bold p-1 rounded hover:text-white hover:bg-gray-700 transition duration-300">CEP/Município</a></li>
                        <li><a href="/login" className="hover:bg-gray-100 border border-gray-500  rounded-full flex gap-1 bg-white"><i className="fa fa-user border w-6 h-6 text-center p-1 rounded-full bg-gray-700 text-white"></i><span className="font-bold px-1">Login</span></a></li>
                    </ul>
                </div>
            </nav>
    );
}