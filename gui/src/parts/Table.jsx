export default function Table({theader,tbody}){
    return(
        <table className="border-collapse w-full">
            <thead>
                <tr className="bg-gray-200">
                    {theader.map((header, index) => (
                        <th key={index} className="border px-4 py-2">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tbody.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-100">
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border px-4 py-2">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}