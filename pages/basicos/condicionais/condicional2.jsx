import SomentePar from "../../components/somentePar";
import If from "../../components/If";

export default function condicinal2(){
    const numero = 3;
    return (
        <>
            <If condicao={numero % 2 === 0}>
                <h1>O NUMERO {numero} É PAR</h1>
            </If>
            <If condicao={numero % 2 === 1}>
                <h1>O NUMERO {numero} É IMPAR</h1>
            </If>
        </>
    );
}
