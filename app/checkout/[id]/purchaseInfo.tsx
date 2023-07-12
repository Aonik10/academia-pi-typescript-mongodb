import styles from "./styles/purchaseInfo.module.scss";
import { getCourseById } from "@/utils/api_resources";
import { CourseCreated } from "@/utils/interfaces";

interface PurchaseInfoProps {
    course: CourseCreated;
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
