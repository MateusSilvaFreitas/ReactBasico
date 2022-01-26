export default function lista(){
    const gerarNumeros = (valor) =>{
        let numeros = [];
        for (let i = 0; i < valor; i++) {
            numeros.push(<span>{i + 1}<br/></span>)         
        }
        return numeros;
    }
    return (
        <section>
            {gerarNumeros(10)}
            {gerarNumeros(4)}
        </section>
    );

    
}