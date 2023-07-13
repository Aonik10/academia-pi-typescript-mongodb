import styles from "./styles/purchaseInfo.module.scss";
import { CourseCreated } from "@/utils/interfaces";

interface PurchaseInfoProps {
    course: CourseCreated;
}

export default function PurchaseInfo({ course }: PurchaseInfoProps) {
    const date = course.liveDate.split("T")[0];
    const totalPayment = course.livePrice * (1 - course.onSale);

    return (
        <div className={styles.purchase_info}>
            <div className={styles.resume_container}>
                <div>
                    <h1>Resumen de Compra</h1>
                    <div className={styles.header}>
                        <div>
                            <div className={styles.title}>{course.title}</div>
                            <div className={styles.date}>Fecha Inicio: {date}</div>
                        </div>
                        <div className={styles.live_price}>$ {course.livePrice} ARS</div>
                    </div>
                </div>
                <div className={styles.payment_resume}>
                    <h2>Detalles del pago</h2>
                    <div className={styles.payment_item}>
                        <div>Curso</div>
                        <div>$ {course.livePrice} ARS</div>
                    </div>
                    <div className={styles.payment_item}>
                        <div>Descuento promoción</div>
                        <div className={styles.discount}>-$ {course.onSale * course.livePrice} ARS</div>
                    </div>
                    <div className={styles.payment_item}>
                        <div>Cupon aplicado</div>
                        <div className={styles.discount}>-$ {0} ARS</div>
                    </div>
                    <div className={styles.break_line}></div>
                    <div className={styles.payment_item}>
                        <div className={styles.live_price}>TOTAL</div>
                        <div className={styles.live_price}>$ {totalPayment} ARS</div>
                    </div>
                </div>
                <div>aca</div>
                <div>aca</div>
            </div>
        </div>
    );
}
