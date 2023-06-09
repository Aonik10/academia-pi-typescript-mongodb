"use client";

import { useDispatch } from "react-redux";
import { setDisplay } from "@/app/Redux/Features/counter/modalSlice";
import styles from "./styles/modal.module.scss";

function Modal() {
    const dispatch = useDispatch();

    const closeOnClickOutside = (e: any) => {
        if (e.target.id == "modal") dispatch(setDisplay(false));
    };

    return (
        <div className={styles.modal} id="modal" onClick={closeOnClickOutside}>
            <div className={styles.modal_container}></div>
        </div>
    );
}

export default Modal;
