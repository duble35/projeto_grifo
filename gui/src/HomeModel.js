import Footer from "./parts/Footer";
import Navbar2 from "./parts/Navbar2";

export default function HomeModel({ title, children }) {
    return (
        <div className="text-gray-800 bg-white">
            
            <Navbar2 />

            <main className="bg-white mx-auto lg:w-[1140px] flex flex-col gap-10 my-10 min-h-screen">
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