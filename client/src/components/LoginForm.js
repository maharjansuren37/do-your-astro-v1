import { useState } from "react"

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section className="login">
                <h1>Login</h1>
                <form onSubmit={onSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="text" 
                            placeholder="example@email.com" 
                            name="email" 
                            aria-describedby="user-email" 
                            aria-invalid="false" 
                            onChange={onChange}
                            value={email}
                            required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password: </label>
                        <input 
                            type="password" 
                            name="password"
                            aria-describedby="user-password"
                            aria-invalid="false"
                            onChange={onChange}
                            value={password}
                            placeholder="Password"
                            required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </section>
        </>
        
    )
}