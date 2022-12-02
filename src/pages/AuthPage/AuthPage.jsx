import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    return (
        <main>
            
           <div className='auth'> <LoginForm setUser={setUser} />
            <SignUpForm setUser={setUser} />
            </div>
        </main>
    )
}