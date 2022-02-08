export default function repeticao(){
    const nomes = [
        "Bianca",
        "Milena",
        "Thaynara",
        "Demonio",
        "Geisa"
    ]

    function renderizarLista(){
        return nomes.map((nome, index) => <li key={index}>{nome}</li>)
    }
    return(
        <>
            <ul>
                {renderizarLista()}
            </ul>
        </>
    )
}