"use client";

import styles from "./styles/personalInfo.module.scss";
import { useState } from "react";
import { UserCreated } from "@/utils/interfaces";
import { usePathname, useRouter } from "next/navigation";
import { updateUser } from "@/utils/api_resources";

interface PersonalInformationProps {
    user: UserCreated;
}

interface FormInputProps {
    label: string;
    name: string;
    placeholder?: string;
    required: boolean;
    value: string;
    onChange: (value: string) => void;
}

function FormInput({ label, name, placeholder, required, value, onChange }: FormInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={styles.form_item}>
            <label className={styles.label}>
                {label} <span className={styles.required}>{required && "*"}</span>
            </label>
            <span className={styles.input_frame}>
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={styles.input_text}
                    placeholder={placeholder}
                    required={required}
                />
            </span>
        </div>
    );
}

export default function PersonalInformation({ user }: PersonalInformationProps) {
    const [currentUser, setcurrentUser] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        id_document: user.id_document,
        address: user.address,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await updateUser(user._id, currentUser);
            if (response.error) throw new Error(response.message);
            router.push(pathname + "/payment");
        } catch (error: any) {
            setError(error.message);
        }
        setLoading(false);
    };

    return (
        <div className={styles.personal_info}>
            <div>
                <h1 className={styles.title}>Información Personal</h1>
                <p>Por favor, revisa que la información requerida sea correcta</p>
            </div>
            <form className={styles.personal_info_form}>
                <div>
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.form_row}>
                        <FormInput
                            label="Nombre"
                            name="firstName"
                            required={true}
                            value={currentUser.firstName}
                            onChange={(value) => setcurrentUser({ ...currentUser, firstName: value })}
                        />
                        <FormInput
                            label="Apellido"
                            name="lastName"
                            required={true}
                            value={currentUser.lastName ?? ""}
                            onChange={(value) => setcurrentUser({ ...currentUser, lastName: value })}
                        />
                    </div>

                    <div className={styles.form_row}>
                        <FormInput
                            label="Telefono"
                            name="phoneNumber"
                            required={true}
                            value={currentUser.phoneNumber ?? ""}
                            onChange={(value) => setcurrentUser({ ...currentUser, phoneNumber: value })}
                        />
                        <FormInput
                            label="DNI"
                            name="dni"
                            required={true}
                            value={currentUser.id_document ?? ""}
                            onChange={(value) => setcurrentUser({ ...currentUser, id_document: value })}
                        />
                    </div>
                    <div>
                        <FormInput
                            label="Dirección"
                            name="address"
                            required={false}
                            value={currentUser.address ?? ""}
                            onChange={(value) => setcurrentUser({ ...currentUser, address: value })}
                        />
                    </div>
                </div>
                <div className={styles.btns}>
                    <button
                        type="button"
                        className={`${styles.btn_back} ${styles.btn}`}
                        onClick={() => router.push("/dashboard/courses")}
                        disabled={loading}
                    >
                        Volver
                    </button>
                    <button
                        className={`${styles.btn_next} ${styles.btn} ${loading ? styles.loading : ""}`}
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Siguiente"}
                    </button>
                </div>
            </form>
            <div>
                <p className={styles.signal}>
                    <span className={styles.required}>{"* "}</span>
                    Campo obligatorio
                </p>
                <p
                    className={styles.signal}
                >{`Los detalles serán enviados a tu casilla de correo electrónico "${user.email}"`}</p>
            </div>
        </div>
    );
}
