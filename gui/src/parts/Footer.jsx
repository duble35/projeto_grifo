export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} HubWebService. Todos os direitos reservados.</p>
            <p>Follow us on 
                <a href="https://twitter.com" className="text-blue-400 hover:underline ml-2">Twitter</a>, 
                <a href="https://facebook.com" className="text-blue-400 hover:underline ml-2">Facebook</a>, 
                <a href="https://instagram.com" className="text-blue-400 hover:underline ml-2">Instagram</a>
            </p>
        </footer>
    );
}