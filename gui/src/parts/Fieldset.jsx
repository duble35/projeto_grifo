export default function Fieldset({legend, children}) {
    return(
        <fieldset className="border border-gray-700 rounded p-5 bg-white shadow-lg">
            <legend className="font-semibold text-gray-700">{legend}</legend>
            {children}
        </fieldset>
    );
}