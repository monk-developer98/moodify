import { Link } from "react-router"
import FormGroup from "../components/FormGroup"
import "../style/login.scss"
const Login = () => {
  return (
    <main className="login-page">
        <div className="form-container">
            <h1>Login</h1>
            <form >
                <FormGroup lable="Email" placeholder='Enter your email' />
                <FormGroup lable="Password" placeholder='Enter your password' />
                <button className='button' type="submit">Login</button>
            </form>
             <p>Already have an account?  <Link to='/register'>Register here</Link></p>
        </div>
    </main>
  )
}

export default Login