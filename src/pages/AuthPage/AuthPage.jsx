import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
    return (
        <main>
            
            <LoginForm setUser={setUser} />
            <SignUpForm setUser={setUser} />
        </main>
    )
}