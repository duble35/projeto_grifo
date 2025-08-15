export default function BtnSave({form}){
    return(
        <button type="submit" className="shadow-sm font-bold bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800">
            <i className="fa fa-save"></i> {form.id ? "Atualizar" : "Salvar"}
        </button>
    );
}