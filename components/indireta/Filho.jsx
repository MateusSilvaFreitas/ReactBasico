export default function Filho(props){
    return(
        <>
            <h1>Filho</h1>
            <button onClick={() => props.funcao("Katiau")}>Falar</button>
            <button onClick={props.funcao}>Falar EV</button>
        </>
    )
}