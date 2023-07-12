"use client";

import { useState } from "react";
import styles from "./styles/paymentMethods.module.scss";

interface PaymentMethodProps {
    next: (value: "info" | "payment") => void;
}

export default function PaymentMethods({ next }: PaymentMethodProps) {
    const [selected, setSelected] = useState("mp");
    const [loading, setLoading] = useState(false);
    const [hide, setHide] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log(selected);
        } catch (error) {}
        setLoading(false);
    };

    const onGoBack = () => {
        setHide(true);
        next("info");
    };

    return (
        <form className={`${styles.payment_methods_form} ${hide && styles.hide}`} onSubmit={handleSubmit}>
            <div className={styles.form_items}>
                <div
                    className={`${styles.form_item} ${selected == "mp" && styles.selected}`}
                    onClick={() => setSelected("mp")}
                >
                    <input
                        type="radio"
                        name="mp"
                        checked={selected === "mp"}
                        onChange={() => console.log("")}
                        className={styles.item_input}
                    />
                    <div className={styles.item_content_container}>
                        <div className={styles.item_content}>
                            <label>
                                Mercado Pago (tarjetas de credito / debito, dinero en cuenta u otros medios de pago)
                                <span className={styles.recommended}>{" recomendado"}</span>
                            </label>
                            <div className={styles.mp_image}></div>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.form_item} ${selected == "transfer" && styles.selected}`}
                    onClick={() => setSelected("transfer")}
                >
                    <input
                        type="radio"
                        name="transfer"
                        checked={selected === "transfer"}
                        onChange={() => console.log("")}
                        className={styles.item_input}
                    />
                    <div className={styles.item_content_container}>
                        <div className={styles.item_content}>
                            <label className={styles.item_subcontent}>
                                <div className={styles.bank_image}></div>
                                Depósito o transferencia bancaria
                                <span className={styles.warning}>{" (aprobación de 24 a 48 hs)"}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btns}>
                <button
                    type="button"
                    className={`${styles.btn_back} ${styles.btn}`}
                    onClick={onGoBack}
                    disabled={loading}
                >
                    Volver
                </button>
                <button
                    className={`${styles.btn_next} ${styles.btn} ${loading ? styles.loading : ""}`}
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Siguiente"}
                </button>
            </div>
        </form>
    );
}
