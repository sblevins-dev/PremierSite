import '../css/login.css'

export const Login = () => {
  return (
    <div className="login-container">
        <div className="login-modal-wrapper">
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
