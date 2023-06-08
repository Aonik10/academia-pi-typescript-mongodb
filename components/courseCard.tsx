import { IconCheck, IconX } from "@tabler/icons-react";
import styles from "./styles/courseCard.module.scss";
import { InscriptionButton } from "./buttons";

interface CourseCardProps {
    image: string;
    title: string;
    price: number;
    onSale?: number | null;
    isLive: boolean;
    isOnDemand: boolean;
}

function CourseCard({ image, title, price, onSale, isLive, isOnDemand }: CourseCardProps) {
    return (
        <div className={styles.courseCard}>
            <div className={styles.course_img_container}>
                <div className={styles.course_img} style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.info_container}>
                    <div className={styles.prices}>
                        <div className={styles.price_container}>
                            <div className={onSale ? styles.discounted : styles.price}>{price} ARS</div>
                            {onSale ? <div className={styles.sale_discount}>{onSale * 100}% OFF</div> : ""}
                        </div>
                        {onSale ? <div className={styles.price}>{price * (1 - onSale)} ARS</div> : ""}
                    </div>
                    <div>
                        <div className={styles.live_container}>
                            {isLive ? <IconCheck className={styles.check} /> : <IconX className={styles.cross} />}
                            <div className={`${isLive ? styles.live : styles.not_live}`}>En vivo</div>
                        </div>
                        <div className={styles.live_container}>
                            {isOnDemand ? <IconCheck className={styles.check} /> : <IconX className={styles.cross} />}
                            <div className={`${isOnDemand ? styles.live : styles.not_live}`}>On demand</div>
                        </div>
                    </div>
                </div>
                <div className={styles.inscription_btn}>
                    <InscriptionButton />
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
