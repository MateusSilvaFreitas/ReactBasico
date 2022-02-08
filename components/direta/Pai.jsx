import Filho from "./Filho";

export default function Pai(props){
    return(
        <>
            <h1>FAMILIA {props.familia}</h1>
            <Filho nome="Marcos" familia={props.familia}/>
            <Filho nome="Marcelo" familia={props.familia}/>
        </>
    );
}