import { useState } from "react";
import ContadorDisplay from "../../components/ContadorDisplay";

export default function contador(){

    const estilo = {
        display: "flex",
        flexDirection: "Column",
        backgroundColor: "#222",
        height: "100vh",
        alignItems: "center",
        color: "#fff"
    }

    const [valor, setValor] = useState(0);

    return (
        <section style={estilo}>
            <h1>Counter</h1>
            <ContadorDisplay numero={valor}/>
            <section style={{marginTop: "10px"}}>
                <button style={{width: "50px"}} onClick={() => setValor(valor + 1)}>+</button>
                <button style={{width: "50px"}} onClick={() => setValor(valor - 1)}>-</button>
            </section>
            <h5>The hello world of REACT</h5>
            <h6>Made by: Me!</h6>
        </section>
    );
}