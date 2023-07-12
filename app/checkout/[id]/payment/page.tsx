import styles from "./styles/payment.module.scss";
import PaymentMethodForm from "./paymentMathodsForm";

interface PaymentMethodsProps {}

export default function PaymentMethods({}: PaymentMethodsProps) {
    return (
        <div className={styles.payment}>
            <div>
                <h1 className={styles.title}>Opciones de Pago</h1>
                <p>Elige una de las siguientes opciones</p>
            </div>
            <div className={styles.payment_methods}>
                <PaymentMethodForm />
            </div>
            <div></div>
        </div>
    );
}
