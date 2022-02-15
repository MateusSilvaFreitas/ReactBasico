import Filho from "./Filho"

export default function Pai(props){

    function falarComigo(frase){
        console.log(frase)
    }

    return(
        <>
            <h1>Pai</h1>
            <Filho funcao={falarComigo}/>
        </>
    )
}