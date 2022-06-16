import '../css/login.css'
import { useContext, useEffect } from 'react'
import { Context } from '../contexts/Context'

export const Login = () => {
    const {loginRef, isLoginShown, setLoginShown} = useContext(Context)

    const handle = (e) => {
            if (!loginRef.current?.contains(e.target) && isLoginShown) {
                setLoginShown(false)
                document.querySelector('.login-container').removeEventListener('click', handle)
            }
    }

    useEffect(() => {
        document.querySelector('.login-container').addEventListener('click', handle)
    })

  return (
    <div className="login-container">
        <div className="login-modal-wrapper" ref={loginRef}>
            <div className='login-img'>hello</div>
            <form className='login-form'>
                <h1>Login</h1>
                <p>Don't have an account? Sign up here</p>
                <div className='form-group'>
                    <input type='email' placeholder='Email' />
                </div>
                <div className='form-group'>
                    <input type='password' placeholder='Password' />
                </div>
            </form>
        </div>
    </div>
  )
}
