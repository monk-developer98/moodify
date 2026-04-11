import { Link, useNavigate } from "react-router"
import FormGroup from "../components/FormGroup"
import "../style/login.scss"
import { useAuth } from "../hooks/useAuth"
import { useState } from "react"


const Login = () => {
   const {loading , handleLogin } =  useAuth()
   const [email , setEmail] = useState("")
   const [password , setPassword] = useState("")

   const navigate = useNavigate()

   async function handleSubmit(e) {
        e.preventDefault()
        await handleLogin({email , password})

        navigate("/")

   }
  return (
    <main className="login-page">
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <FormGroup lable="Email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <FormGroup lable="Password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className='button' type="submit">Login</button>
            </form>
             <p>Already have an account?  <Link to='/register'>Register here</Link></p>
        </div>
    </main>
  )
}

export default Login