import styles from './componentCss2.module.css'

export default function componentCss2(props){
    return (
        <>
            <div className={-10 > 0 ? styles.branco : styles.laranja}>TEXTO AAA</div>
            <div className={{color: "laranja"}}>LARANJA</div>
        </>
    )
}