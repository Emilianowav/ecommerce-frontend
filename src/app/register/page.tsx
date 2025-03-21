import RegisterFormContainer from "../register/registerFormContainer"
import styles from "./page.module.css"

export default function Login () {

    return(
            <div className={styles.page}>
                <RegisterFormContainer/>
            </div>

    )
}