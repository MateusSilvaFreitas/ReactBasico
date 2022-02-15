import { useEffect, useState } from "react"
import DisplayMegasena from "../../components/DisplayMegasena"
import gerarNumeros from "../../functions/mega";

export default function Megasena(){

    const [qntd, setQntd] = useState(6)
    const [numeros, setNumeros] = useState([]);

    useEffect(() => {
        setNumeros(gerarNumeros())
    }, [])


    return(
        <section style={{
            height: "100vh",
            backgroundColor: "#222",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white"
        }}> 
            <h1>MEGA SENA</h1>
            <DisplayMegasena numeros={numeros}/>
            <div style={{marginTop: "10px"}}>
                <input type="number" min={6} max={60} value={qntd} onChange={e => setQntd(e.target.value)}/>
                <button onClick={() => setNumeros(gerarNumeros(qntd))}>Gerar sorteio</button>
            </div>
        </section>
    )
}