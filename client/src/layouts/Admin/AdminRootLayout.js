import LoginForm from "../../components/LoginForm";
import Register from "../../components/RegisterForm";
import { useAuth } from "../../hooks/AuthProvider";
import Header from "./AdminHeader";

export default function AdminRootLayout() {
    const auth = useAuth();

    return (
        <>
            <Header />
            <h2>Welcome! {auth.user}</h2>
            <button onClick={() => auth.logOut()}>Logout</button>
            <h2>Admin page</h2>
        </>
    )
}