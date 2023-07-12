import styles from "./styles/page.module.scss";
import { UserCreated } from "@/utils/interfaces";
import PersonalInformation from "./personalInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

interface getServerSessionReturns {
    user: UserCreated;
}

export default async function Page() {
    const session = (await getServerSession(authOptions)) as getServerSessionReturns;

    return (
        <div>
            <PersonalInformation user={JSON.parse(JSON.stringify(session.user))} />
        </div>
    );
}
