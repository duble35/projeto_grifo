import Footer from "./parts/Footer";
import Navbar from "./parts/Navbar";

function App({ children, banner }) {
  return (
    <div className="App">

      <Navbar />

      <div className="min-h-screen">
        <div className="container mx-auto min-h-screen flex flex-col gap-10">
          <div className="border-b border-gray-700 mt-10"><span className="bg-gray-700 px-2 py-1 font-bold text-white rounded-t">{banner}</span></div>
          {children}
        </div>
      </div>
      
      <Footer />
    
    </div>
  );
}

export default App;
