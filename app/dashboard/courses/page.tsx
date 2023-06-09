import CourseCard from "@/components/courseCard";
import styles from "./styles/page.module.scss";
import { getCourses } from "@/utils/api_resources";

async function DSCourses() {
    const { courses } = await getCourses();

    return (
        <div className={styles.ds_courses}>
            <div className={styles.titles}>
                <h1 className={styles.main}>Todos los cursos</h1>
                <p className={styles.subtitle}>Explora nuestros cursos, no dudes en consultarnos!</p>
                <hr className={styles.line} />
            </div>
            <div className={styles.current_courses}>
                {courses.map((course) => course.isActive && <CourseCard course={course} />)}
            </div>
        </div>
    );
}

export default DSCourses;
