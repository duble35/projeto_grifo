import HomeModel from "../HomeModel";

export default function ZipCode(){
    return(
        <HomeModel title={"CEP/Município"} children={
            <p className="italic text-gray-300">
                Esta página ainda está em desenvolvimento.
            </p>
        } />
    );
}