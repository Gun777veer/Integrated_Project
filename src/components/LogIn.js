import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                <div class="btn">

                    <button id="sub_btn" type="submit">Login</button>
                    </div>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/Signup">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>

    );
  }
  
  export default Login;