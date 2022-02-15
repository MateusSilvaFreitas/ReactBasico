export default function ContadorDisplay(props){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            color: "#222",
            width: "5vh",
            height: "5vh",
            borderRadius: "100%",
            fontSize: "1.2em",
            marginLeft: "10px"
        }}>
            {props.numero}
        </div>
    )
}