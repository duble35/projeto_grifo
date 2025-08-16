import App from "../App";

export default function Home(){
    return(
        <>
            <App 
            children={
                <p className="italic text-gray-300">
                    Esta página ainda está em desenvolvimento.
                </p>
            } 
            banner={"Home Page"}
            />
        </>
    );
}