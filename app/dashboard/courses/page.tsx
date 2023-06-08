import CourseCard from "@/components/courseCard";
import styles from "./styles/page.module.scss";

function DSCourses() {
    return (
        <div className={styles.ds_courses}>
            <div className={styles.titles}>
                <h1 className={styles.main}>Todos los cursos</h1>
                <p className={styles.subtitle}>Explora nuestros cursos, no dudes en consultarnos!</p>
                <hr className={styles.line} />
            </div>
            <div className={styles.current_courses}>
                <CourseCard
                    image={"https://iili.io/H4AqliN.jpg"}
                    title="Matematicas I"
                    price={6000}
                    isLive={true}
                    isOnDemand={false}
                />
                <CourseCard
                    image={"https://iili.io/H4AIg44.jpg"}
                    title="Macroeconomia II"
                    price={10000}
                    onSale={0.2}
                    isLive={false}
                    isOnDemand={true}
                />
            </div>
        </div>
    );
}

export default DSCourses;
