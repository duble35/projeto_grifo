export default function Fieldset({legend, cildren}){
    return(
        <fieldset className="border border-gray-700 shadow-lg rounded p-4 mb-4">
            <legend className="text-lg font-semibold mb-2">{legend}</legend>
            {cildren}
        </fieldset>
    );
}