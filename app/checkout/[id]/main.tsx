"use client";

import styles from "./styles/main.module.scss";
import { UserCreated } from "@/utils/interfaces";
import PersonalInformation from "./personalInfo";
import { useState } from "react";
import PaymentMethods from "./paymentMathods";

interface MainProps {
    user: UserCreated;
}

export default function Main({ user }: MainProps) {
    const [next, setNext] = useState<"info" | "payment">("info");

    const setNextTimed = (value: "info" | "payment") => {
        setTimeout(() => setNext(value), 500);
    };

    return (
        <div className={styles.main}>
            <div>
                <div className={styles.header}>
                    {next == "info" && <h1 className={styles.title}>Información Personal /</h1>}
                    <h1 className={`${next == "payment" ? styles.title : styles.next}`}>Pago</h1>
                </div>
                <p>
                    {next == "info"
                        ? "Por favor, revisa que la información requerida sea correcta"
                        : "Elige una de las siguientes opciones"}
                </p>
            </div>

            {next == "info" ? (
                <PersonalInformation user={user} next={() => setNextTimed("payment")} />
            ) : next == "payment" ? (
                <PaymentMethods next={() => setNextTimed("info")} />
            ) : (
                <div>error</div>
            )}
            <div></div>
        </div>
    );
}
