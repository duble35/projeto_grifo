import Logo from "../assets/image/logo.png";
export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700">
            <div className="bg-white w-[400px] flex flex-col gap-5 p-5 shadow-lg rounded-lg">
                <div className="flex justify-center">
                    <img src={Logo} alt="Logo do sistema" className="h-[50px]" />
                </div>
                <div className="text-right border-b border-gray-700 text-white">
                    <h1 className=""><span className="bg-gray-700 py-1 px-4 rounded-t">Login</span></h1>
                </div>
                <form action="" className="flex flex-col gap-2">
                    <div>
                        <label htmlFor="username">Usuário</label>
                        <div className="border rounded flex items-center">
                            <i className="fa fa-user p-3 bg-gray-700 text-white"></i>
                            <input type="text" id="username" className="p-2 w-full outline-none" placeholder="nome.sobrenome" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <div className="border rounded flex items-center">
                            <i className="fa fa-lock p-3 bg-gray-700 text-white"></i>
                            <input type="password" id="password" minLength={6} className="p-2 w-full outline-none" placeholder="*****" required />
                        </div>
                    </div>
                    <div className="my-5">
                        <button type="submit" className="mr-5 transition duration-300 bg-gray-700 hover:bg-gray-800 p-4 rounded text-white"><i class="fa-solid fa-right-to-bracket"></i> &nbsp; Acessar sistema</button>
                        <a href="/" className="transition duration-300 bg-red-700 hover:bg-red-800 p-4 rounded text-white"><i className="fa-solid fa-circle-xmark"></i> &nbsp; Cancelar login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}