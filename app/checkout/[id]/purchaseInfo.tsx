import { getCourseById } from "@/utils/api_resources";
import styles from "./styles/purchaseInfo.module.scss";
import { CourseResponse } from "@/utils/interfaces";

interface PurchaseInfoProps {
    course: CourseResponse;
}

export default function PurchaseInfo({ course }: PurchaseInfoProps) {
    return (
        <div className={styles.purchase_info}>
            <div className={styles.resume_container}>
                <h1>Resumen de Compra</h1>
            </div>
        </div>
    );
}
