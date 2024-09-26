import React, { useState } from "react"
import { useAuth } from "../../states/AuthProvider";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const auth = useAuth();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData.email !== "" && formData.password !== "") {
            auth.loginAction(formData);
            return;
        }

        alert("Please provide a  valid input");
    }

    return (
        <>
            {/* <AdminHeader /> */}
            <section className="login-section">
                <div className="container">
                    <h1 className="text-center mt-1">Login</h1>
                    <form onSubmit={onSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                className="form-control"
                                type="text" 
                                placeholder="example@email.com" 
                                name="email" 
                                aria-describedby="user-email" 
                                aria-invalid="false" 
                                onChange={onChange}
                                value={email}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                className="form-control"
                                type="password" 
                                name="password"
                                aria-describedby="user-password"
                                aria-invalid="false"
                                onChange={onChange}
                                value={password}
                                placeholder="Password"
                                required />
                        </div>
                        <div>
                            <button className="btn btn-login" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
        
    )
}