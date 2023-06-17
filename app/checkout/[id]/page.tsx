import styles from "./styles/page.module.scss";

interface FormInputProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    required: boolean;
}

function FormInput({ label, name, type, placeholder, required }: FormInputProps) {
    return (
        <div className={styles.form_item}>
            <label className={styles.label}>
                {label} <span>{required && "*"}</span>
            </label>
            <span className={styles.input_frame}>
                <input
                    type={type}
                    name={name}
                    className={styles.input_text}
                    placeholder={placeholder}
                    required={required}
                />
            </span>
        </div>
    );
}

export default function PersonalInformation() {
    return (
        <form className={styles.personal_info}>
            <div>
                <div className={styles.form_row}>
                    <FormInput label="Nombre" name="firstname" type="text" required={true} />
                    <FormInput label="Apellido" name="lastname" type="text" required={true} />
                </div>
                <div>
                    <FormInput label="Correo electrónico" name="email" type="text" required={true} />
                </div>
                <div className={styles.form_row}>
                    <FormInput label="Telefono" name="phone" type="text" required={true} />
                    <FormInput label="DNI" name="dni" type="text" required={true} />
                </div>
                <div>
                    <FormInput label="Dirección" name="address" type="text" required={false} />
                </div>
            </div>
            <div className={styles.btns}>
                <button className={`${styles.btn_back} ${styles.btn}`}>Volver</button>
                <button className={`${styles.btn_next} ${styles.btn}`}>Siguiente</button>
            </div>
        </form>
    );
}
