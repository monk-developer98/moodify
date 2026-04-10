import { Link } from 'react-router'
import FormGroup from '../components/FormGroup'
import '../style/register.scss'

const Register = () => {
  return (
    <main className="register-page">
        <div className="form-container">
            <h1>Register</h1>
            <form>
                <FormGroup lable='Name' placeholder='Enter your name' />
                <FormGroup lable='Email' placeholder='Enter your email' />
                <FormGroup lable='Password' placeholder='Enter your password' />
                <button className='button' type='submit'>Register</button>
            </form>
            <p>Already have an account?  <Link to='/login'>Login here</Link></p>
        </div>
    </main>
  )
}

export default Register