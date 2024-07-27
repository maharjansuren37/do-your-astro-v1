import { useState } from "react"

export default function LoginForm() {
    // const [input, setInput] = useState({
    //     email: '',
    //     password: ''
    // });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleInput = (e) => {
    //     const { email, password } = e.target;

    //     setInput((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    return (
        <form>
            <div className="form-control">
                <label htmlFor="email">Email: </label>
                <input 
                    type="text" 
                    placeholder="example@email.com" 
                    name="email" 
                    aria-describedby="user-email" 
                    aria-invalid="false" 
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}