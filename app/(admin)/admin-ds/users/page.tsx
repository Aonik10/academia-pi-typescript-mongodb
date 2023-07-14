import "bootstrap/dist/css/bootstrap.css";

import CreateUserForm from "./createUserMenu";
import UsersTable from "./usersTable";
import { getUsers } from "@/utils/api_resources";

export default async function Users() {
    let response = await getUsers();

    return (
        <div className="d-flex flex-column h-100">
            <CreateUserForm />
            <div className="w-100">
                {/* Hay un error en nextJs que hace que pasarle users=users arroje un warning, por ahora lo mantengo asi para evitar el mensaje */}
                <UsersTable users={JSON.parse(JSON.stringify(response.users))} />
            </div>
        </div>
    );
}
