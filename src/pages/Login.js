import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { login }=useAuth();

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email address is invalid";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            const success=await login(email,password);
            if (success) {
                navigate('/');
            } else {
                alert("Invalid login");
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center border-light bg-dark vh-100">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            value={password}
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Signup</Link>
            </div>
        </div>
    );
}

export default Login;
