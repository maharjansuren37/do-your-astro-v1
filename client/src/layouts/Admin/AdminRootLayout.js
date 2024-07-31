import { useAuth } from "../../hooks/AuthProvider";
import AdminHeader from "./AdminHeader";
import Header from "./AdminHeader";
import EditPage from "./EditPage";

export default function AdminRootLayout() {
    const auth = useAuth();

    return (
        <>
            <AdminHeader />
            {/* <button onClick={() => auth.logOut()}>Logout</button> */}
            <EditPage />
        </>
    )
}