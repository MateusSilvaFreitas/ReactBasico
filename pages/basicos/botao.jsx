function acao1(){
    console.log("acao1")
}

export default function botao(){

    function acao2(){
        console.log("acao2")
    }

    function acao4(e){
        console.log(e)
    }

    return(
        <>
            <button onClick={acao1}>Click 1</button>
            <button onClick={acao2}>Click 2</button>
            <button onClick={() => console.log("acao3")}>Click 3</button>
            <button onClick={acao4}>Click 4</button>
            <button onClick={e => acao4(e.altKey)}>Click 4 v2</button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)}/>
            </div>
        </>
    )
}
