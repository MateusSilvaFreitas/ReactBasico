import { useState } from "react"

export default function mouse(props){

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const style ={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#222",
        color: "#fff",
        flexDirection: "column"
    }

    function quandoMover(ev){
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return(
        <div style={style} onMouseMove={quandoMover}>
           <span>Eixo X: {x}</span>
           <span>Eixo Y: {y}</span>
        </div>
    )
}
