import listaProdutos from "../../data/listaProdutos";

export default function repeticao2() {

    function renderizarLinhas() {
        return listaProdutos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td>
                        {produto.id}
                    </td>
                    <td>
                        {produto.nome}
                    </td>
                    <td>
                        R$ {produto.preco}
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Codigo</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </>
    )
}