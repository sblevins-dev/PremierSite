import '../css/register.css'
import { useContext, useEffect } from 'react'
import { Context } from '../contexts/Context'

export const Login = () => {
    const {registerRef, isRegisterShown, setRegisterShown} = useContext(Context)

    const handle = (e) => {
            if (!registerRef.current?.contains(e.target) && isRegisterShown) {
                setRegisterShown(false)
                document.querySelector('.login-container').removeEventListener('click', handle)
            }
    }

    useEffect(() => {
        document.querySelector('.login-container').addEventListener('click', handle)
    })

  return (
    <div className="register-container">
        <div className="register-modal-wrapper" ref={registerRef}>
            <div className='register-img'>hello</div>
            <form className='register-form'>
                <h1>Rgister</h1>
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
