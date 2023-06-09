"use client";

import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "@/app/Redux/Features/counter/modalSlice";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import styles from "./styles/modal.module.scss";
import { RootState } from "@/app/Redux/store";
import CourseMode from "./courseMode";

function Modal() {
    const dispatch = useDispatch();
    const course = useSelector((state: RootState) => state.modal.currentCourse);
    const [exit, setExit] = useState(false);

    const closeModal = () => {
        setExit(true);
        setTimeout(() => dispatch(setDisplay(false)), 500);
    };

    const closeOnClickOutside = (e: any) => {
        if (e.target.id == "modal") closeModal();
    };
    if (course)
        return (
            <div className={`${styles.modal} ${exit ? styles.fadeOut : ""}`} id="modal" onClick={closeOnClickOutside}>
                <div className={styles.modal_container}>
                    <div>
                        <div className={styles.modal_header}>
                            <h1 className={styles.course_name}>Curso online: {course?.title}</h1>
                            <button className={styles.close_btn} onClick={closeModal}>
                                <IconX />
                            </button>
                        </div>
                        <div className={styles.content_container}>
                            <div className={styles.course_description}>
                                <div className={styles.duration}>Duración: {course.duration ?? "a determinar"}</div>
                                <h2 className={styles.subtitle}>Sobre el curso</h2>
                                <div className={styles.description}>{course.description}</div>
                            </div>
                            <div className={styles.course_details}>
                                <div>
                                    <h2 className={styles.subtitle}>Modalidades</h2>
                                    {/* arreglar aca */}
                                    <div className={styles.modes_section}>
                                        <CourseMode mode={course.isLive} text="En vivo" />
                                        {course.isLive && (
                                            <div className={styles.price_container}>
                                                <div className={styles.sale_discount}>{course.onSale * 100}% OFF</div>
                                                <div className={course.onSale ? styles.discounted : styles.price}>
                                                    {course.livePrice} ARS
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.price}>
                                        <div>{course.livePrice * (1 - course.onSale)} ARS</div>
                                    </div>
                                    {/* arreglar aca */}
                                    <div className={styles.modes_section}>
                                        <CourseMode mode={course.isOnDemand} text="On demand" />
                                        {course.isOnDemand && <div>{course.onDemandPrice} ARS</div>}
                                    </div>
                                </div>
                                <button className={styles.inscription_btn}>Inscribirme</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.modal_footer}>
                        <button className={`${styles.close_btn} ${styles.end_btn}`} onClick={closeModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        );
}

export default Modal;
