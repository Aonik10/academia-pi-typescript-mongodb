import CourseCard from "@/components/courseCard";
import styles from "./styles/page.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

async function DSHome() {
    const session = await getServerSession(authOptions);
    const firstName = session?.user.firstName;

    return (
        <div className={styles.dsHome}>
            <div className={styles.titles}>
                <h1 className={styles.main}>¡Hola, {firstName}!</h1>
                <p className={styles.subtitle}>Mis cursos</p>
                <hr className={styles.line} />
            </div>
            <div className={styles.courses_container}>
                <div className={styles.current_courses}></div>
            </div>
        </div>
    );
}

export default DSHome;

/*

{
  name: 'Emiliano Pellegrino',
  email: 'emp10999@gmail.com',
  image: 'https://lh3.googleusercontent.com/a/AAcHTtcXX7gHaxCgJm1zSG-61m6_2BWW-fk1XOvqWeuT1g=s96-c',
  id: '104124809935526885646',
  randomKey: undefined
}

*/
