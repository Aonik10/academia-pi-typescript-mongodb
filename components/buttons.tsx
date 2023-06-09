"use client";

import styles from "./styles/buttons.module.scss";
import { useDispatch } from "react-redux";
import { setDisplay } from "@/app/Redux/Features/counter/modalSlice";

export const LoginButton = () => {
    return (
        <button style={{ marginRight: 10 }} onClick={() => console.log("hola")}>
            Sign in
        </button>
    );
};

export const InscriptionButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setDisplay(true));
    };

    return (
        <button className={styles.inscription_btn} onClick={handleClick}>
            Inscribirme
        </button>
    );
};
