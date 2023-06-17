import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import styles from "./styles/layout.module.scss";
import PurchaseInfo from "./purchaseInfo";
import { getCourseById } from "@/utils/api_resources";

interface CheckoutLayoutProps {
    children: React.ReactNode;
    params: {
        id: string;
    };
}

export default async function DashboardLayout({ children, params }: CheckoutLayoutProps) {
    const session = await getServerSession(authOptions);
    const { course } = await getCourseById(params.id);

    return (
        <main className={styles.checkout}>
            <div className={styles.steps}>{children}</div>
            <PurchaseInfo course={course} />
        </main>
    );
}
