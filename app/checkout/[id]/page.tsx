import styles from "./styles/page.module.scss";
import { UserCreated } from "@/utils/interfaces";
import PersonalInformation from "./personalInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import Main from "./main";

interface getServerSessionReturns {
    user: UserCreated;
}

export default async function Page() {
    const session = (await getServerSession(authOptions)) as getServerSessionReturns;

    return (
        <div>
            <Main user={JSON.parse(JSON.stringify(session.user))} />
        </div>
    );
}
