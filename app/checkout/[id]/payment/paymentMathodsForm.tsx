"use client";

import styles from "./styles/paymentMethodsForm.module.scss";

interface PaymentMethodFormProps {}

function FormInput() {
    return (
        <div className={styles.form_item}>
            <input type="radio" />
        </div>
    );
}

export default function PaymentMethodForm({}: PaymentMethodFormProps) {
    return (
        <form>
            <div>
                <FormInput />
                <FormInput />
                <FormInput />
                <FormInput />
            </div>
        </form>
    );
}
