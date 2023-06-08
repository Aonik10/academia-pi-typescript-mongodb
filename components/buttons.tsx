"use client";

import styles from "./styles/buttons.module.scss";

export const LoginButton = () => {
    return (
        <button style={{ marginRight: 10 }} onClick={() => console.log("hola")}>
            Sign in
        </button>
    );
};

export const InscriptionButton = () => {
    return <button className={styles.inscription_btn}>Inscribirme</button>;
};
