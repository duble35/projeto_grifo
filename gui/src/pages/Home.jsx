import App from "../App";

export default function Home(){
    return(
        <>
            <App children={
                <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
            } />
        </>
    );
}