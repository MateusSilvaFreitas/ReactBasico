import ContadorDisplay from "./ContadorDisplay"

export default function DisplayMegasena(props) {


    function renderNumeros(){
        return props.numeros?.map(numero => {
            return <ContadorDisplay numero={numero} key={numero}/>
        })
    }
    return (
            <section>
                <section style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}>
                    {renderNumeros()}
                </section>
            </section>        
    )

}