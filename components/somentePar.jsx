export default function somentePar(props){

    const numeroPar = props.numero % 2 === 0;

    function renderizarNumeroPar(){
        return <h1>{props.numero}</h1>
    }

        return (
            <div>
                {numeroPar ? 
                    renderizarNumeroPar() : 
                    null}
            
            </div>
        )
}