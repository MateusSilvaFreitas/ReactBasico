import { useState } from "react";
import Titulo from "../../components/Titulo";

export default function segundo(){
    const [contador, setContador] = useState(0);
    return (
        <div>
            <Titulo titulo="Batatinha" subtitulo="Quando nasce"/>
            <h1 className="teste">{contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Butao</button>
        </div>
    );
}