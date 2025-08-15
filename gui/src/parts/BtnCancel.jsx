export default function BtnCancel({ onCancel }) {
    return (
        <button
            type="button"
            onClick={onCancel}
            className="shadow-sm font-bold bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800"
        >
            <i className="fa-solid fa-circle-xmark"></i> Cancelar
        </button>
    );
}
