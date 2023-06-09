"use client";

import { useDispatch } from "react-redux";
import { setDisplay } from "@/app/Redux/Features/counter/modalSlice";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import styles from "./styles/modal.module.scss";

function Modal() {
    const dispatch = useDispatch();
    const [exit, setExit] = useState(false);

    const closeOnClickOutside = (e: any) => {
        if (e.target.id == "modal") {
            setExit(true);
            setTimeout(() => dispatch(setDisplay(false)), 500);
        }
    };

    return (
        <div className={`${styles.modal} ${exit ? styles.fadeOut : ""}`} id="modal" onClick={closeOnClickOutside}>
            <div className={styles.modal_container}>
                <div className={styles.modal_header}>
                    <h1 className={styles.course_name}>Curso online de: {"nombre del curso"}</h1>
                    <button className={styles.close_btn}>
                        <IconX />
                    </button>
                </div>
                <div className={styles.content_container}>
                    <div>
                        <div className={styles.duration}>duration</div>
                        <h2 className={styles.about_course}>Sobre el curso</h2>
                        <div className={styles.description}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
