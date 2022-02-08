import Lista from "../../components/Lista"
import Item from "../../components/Item"

export default function componenteComFilhos(){
    return (
        <>
            <Lista>
                <Item conteudo="Item 1x"/>
                <Item conteudo="Item 2"/>
                <Item conteudo="Item 3"/>
            </Lista>
        </>
    )
}