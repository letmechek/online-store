import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    const [showSignup, setShowSignup] = useState(false)
    return (
        <main>
            
           <div className='auth'> 
            {showSignup ? <SignUpForm setUser={setUser} /> :
            <LoginForm setUser={setUser} />}
            <button onClick={() => setShowSignup(!showSignup)}>
                {showSignup ? 'Log In' : 'Sign Up'}
            </button>
            </div>
        </main>
    )
}