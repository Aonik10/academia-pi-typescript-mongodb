import { getUserById } from "@/utils/api_resources";
import UserCard from "./userCard";
import UserData from "./userData";
import UserNotFound from "./userNotFound";

interface UserDetailProps {
    params: {
        id: string;
    };
}

export default async function UserDetail({ params }: UserDetailProps) {
    const response = await getUserById(params.id);

    if (response.user) {
        return (
            <div className="d-flex justify-content-center h-100">
                <UserCard
                    isActive={response.user.isActive ?? true}
                    image={response.user.image}
                    fullName={response.user.firstName + " " + response.user.lastName}
                />
                <UserData
                    firstName={response.user.firstName}
                    lastName={response.user.lastName}
                    email={response.user.email}
                    phoneNumber={response.user.phoneNumber}
                    address={response.user.address}
                />
            </div>
        );
    } else {
        return <UserNotFound />;
    }
}
