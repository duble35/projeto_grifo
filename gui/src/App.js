import Footer from "./parts/Footer";
import Navbar from "./parts/Navbar";

function App({ children, banner }) {
  return (
    <div className="App">
      <div className="flex min-h-screen">
        <Navbar />
        <div className="container flex-1 mx-auto min-h-screen bg-gray-300 p-4">
          <div className="text-gray-400 text-end uppercase">{banner}</div>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
