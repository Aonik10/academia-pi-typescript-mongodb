"use client";

import styles from "./styles/buttons.module.scss";
import { useDispatch } from "react-redux";
import { setDisplay, setCurrentCourse } from "@/app/Redux/Features/counter/modalSlice";
import { CourseResponse } from "@/utils/interfaces";

export const LoginButton = () => {
    return (
        <button style={{ marginRight: 10 }} onClick={() => console.log("hola")}>
            Sign in
        </button>
    );
};

interface InscriptionButtonProps {
    course: CourseResponse;
}

export const InscriptionButton = ({ course }: InscriptionButtonProps) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentCourse(course));
        dispatch(setDisplay(true));
    };

    return (
        <button className={styles.inscription_btn} onClick={handleClick}>
            Inscribirme
        </button>
    );
};
