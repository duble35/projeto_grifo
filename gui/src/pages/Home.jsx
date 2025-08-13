import App from "../App";

export default function Home(){
    return(
        <>
            <App 
            children={
                <h1 className="text-3xl font-bold"></h1>
            } 
            banner={"Home Page"}
            />
        </>
    );
}