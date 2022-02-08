export default function If(props){
    if(props.condicao){
        return props.children;
    } else {
        return null;
    }
}