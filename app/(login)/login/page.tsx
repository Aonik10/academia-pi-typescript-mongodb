import styles from "./styles/page.module.scss";
import SignIn from "@/components/signIn";

export default function Login() {
    return (
        <div className={styles.login}>
            <div>
                <SignIn />
            </div>
        </div>
    );
}
